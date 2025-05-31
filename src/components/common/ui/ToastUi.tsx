'use client'
import { addToast } from '@heroui/react';

export function ToastUi({title, color}:{title:string, color:"secondary" | "default" | "foreground" | "primary" | "success" | "warning" | "danger" | undefined}) {
  addToast({
    title: title ?? 'Toast title',
    color: color ?? 'secondary',
  });
}
