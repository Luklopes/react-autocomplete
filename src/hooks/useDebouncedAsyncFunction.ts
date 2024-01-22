export function useDebouncedAsyncFunction<
  DebouncedFunction extends (...args: unknown[]) => Promise<void>
>(
  functionToBeExecuted: DebouncedFunction,
  delay?: number
): [DebouncedFunction, () => void] {
  let timer: NodeJS.Timeout | null = null;

  const debouncedFunction = async function (...args: unknown[]): Promise<void> {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    return new Promise((resolve, reject) => {
      timer = setTimeout(async () => {
        timer = null;
        try {
          await functionToBeExecuted.apply(this, args);
          resolve();
        } catch (error) {
          reject(error);
        }
      }, delay ?? 1000);
    });
  };

  const cancel = function () {
    if (!timer) {
      return;
    }

    clearTimeout(timer);
    timer = null;
  };

  return [debouncedFunction as DebouncedFunction, cancel];
}
