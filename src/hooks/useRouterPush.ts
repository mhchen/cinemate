import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type UseRouterPushParams = {
  queryParams: Record<string, string>;
  pathname?: string;
};

export function useRouterPush() {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentSearchParams = useSearchParams();

  return ({ queryParams, pathname }: UseRouterPushParams) => {
    const searchParams = new URLSearchParams({
      ...Object.fromEntries(currentSearchParams),
      ...queryParams,
    });
    const newPath = `${pathname ?? currentPathname}?${searchParams.toString()}`;

    router.push(newPath);
  };
}
