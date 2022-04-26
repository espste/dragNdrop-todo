
//autobind decorator
export function autobind(
    //using '_' to tell TS we dont need those two but we need to accept it in the fnc
    _: any, 
    _2: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}