export default class FirebaseService {

    static list = (firestore, callback) => {

        let ref = firestore.collection('estudantes')
        ref.onSnapshot(

            (query) => {
                let estudantes = []
                query.forEach(
                    (doc) => {
                        const { nome, curso, IRA } = doc.data()
                        estudantes.push(
                            {
                                _id: doc.id,
                                nome,
                                curso,
                                IRA,
                            }
                        )//Push
                    }//doc
                )//forEach
                
                //callback
                callback(estudantes)

            }//query

        )//onSnapshot

    }

    static delete = () => {

    }

    static create = () => {

    }

    static retrieve = () => {

    }

    static edit = () => {

    }

}