import { type RouteRecordRaw } from 'vue-router'
import { router } from '@/app/router'
export type MenuItem = {
  label: string
  to?: string
  items?: MenuItem[]
  command?: () => void
}

export const toMenuItems = (routes: RouteRecordRaw[], parentPath = ''): MenuItem[] => {
  return routes
    .slice()
    .sort((a, b) => Number(a.meta?.order ?? 999) - Number(b.meta?.order ?? 999))
    .flatMap((r): MenuItem[] => {
      const fullPath =
        r.path === ''
          ? parentPath || '/'
          : r.path.startsWith('/')
            ? r.path
            : `${parentPath}/${r.path}`.replace(/\/{2,}/g, '/')

      const childItems = r.children ? toMenuItems(r.children, fullPath) : []
      const isMenu = r.meta?.menu === true
      const label = String(r.meta?.title ?? r.name ?? fullPath)

      if (!isMenu) {
        return childItems
      }

      if (childItems.length > 0) {
        return [
          {
            label,
            items: childItems,
          },
        ]
      }

      return [
        {
          label,
          command: () => router.push(fullPath),
        },
      ]
    })
}
