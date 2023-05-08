export function Emoji() {
    return (target: Object, key: string | symbol) => {
        let val = target[key];

        const getter = () => val;
        const setter = (value: string) => val = `😂 ${value} 😂`;

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })

    }
}


export function Confirmable(message: string) {
    return (
        target: object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const originalFunc = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const allow = window.confirm(message);
            if (allow) {
              const result = originalFunc.apply(this, args);
              return result;
            }
            return null;
          };
          return descriptor;
    }
}