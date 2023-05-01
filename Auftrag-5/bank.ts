class BankAccount{
    private _balance: number;
    private _accountNumber: string;
    private _pincode: number;

    constructor(accountNumber: string, pincode: number, balance: number) {
        this._accountNumber= accountNumber;
        this._pincode= pincode;
        this._balance= balance;

    }

    public deposit(amount:number):void{
        this._balance+=amount;
    }

    public widthdraw(amount:number,pincode:number):void{
        if(pincode !== this._pincode)return;
        if(amount>this._balance)return;
        this._balance-=amount;
    }

    public getBalance(pincode:number):number | undefined{
        if(pincode !== this._pincode)return;
        return this._balance;
    }

    public transfere(amount:number,pincode:number, accountNumber:string):void{
        if(pincode !== accountX._pincode)return;
        accountY._balance+=amount;
        if(amount > accountX._balance)return;
        console.log("Error");
        if(amount < 0)return;
        console.log("Error");
    }

}

const accountX= new BankAccount("123456789", 1234, 1000);
const accountY= new BankAccount("987654321", 4321, 1000);