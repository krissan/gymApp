export class SubRoutine {
	setExercise: string;
	repAmount: number;
    setTime: number;

    constructor(sE: string, rA : number, sA : number) {
        this.setExercise = sE;
        this.repAmount = rA;
        this.setTime = +sA;
    }
}

export class RoutineModel {
	routineName: string;
	sets: SubRoutine[];
    rid: string;

    constructor(rn: string, sets : SubRoutine[], rid: string) {
        this.routineName = rn;
        this.sets = sets;
        this.rid = rid;
    }	
}