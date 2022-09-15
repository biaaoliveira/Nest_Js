import { animal } from "./Animal";

export class horse extends animal{
    som(): void {
        console.log("Relincha");
    }
    corre(): void {
        console.log("MUITO RÁPIDO.");
    }
}