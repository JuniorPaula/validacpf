class CpfValidator {
    constructor(cpf) {
        this.cpf = cpf;
    }

    get clearCpf() {
        return this.cpf.replace(/\D+/g, '');
    }

    validator() {
        if (!this.clearCpf) return false;
        if (typeof this.clearCpf === 'undefined') return false;
        if (this.clearCpf.length !== 11) return false;
        if (this.isSequential()) return false;

        const partialCpf = this.clearCpf.slice(0, -2);
        const digitOne = CpfValidator.createDigit(partialCpf);
        const digitTwo = CpfValidator.createDigit(partialCpf + digitOne);
        const newCpf = partialCpf + digitOne + digitTwo;

        return newCpf === this.clearCpf;
    }

    static createDigit(partialCpf) {
        const cpfArray = Array.from(partialCpf);

        let regressive = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressive * Number(val));
            regressive--

            return ac;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? '0': String(digit);
    }

    isSequential() {
        const sequential = this.clearCpf.charAt(0).repeat(this.clearCpf.length);
        return sequential === this.clearCpf;
    }
}
