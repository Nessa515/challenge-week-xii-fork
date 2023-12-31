import { Tutor } from "../../models/Tutor";


export class TutorRepositoryFullUpdate{

    async updateTutor(id: string, tutorData: any){
        return Tutor.findByIdAndUpdate({_id: id}, tutorData, {
            new: true,
            runValidators: true
        });
    }
}