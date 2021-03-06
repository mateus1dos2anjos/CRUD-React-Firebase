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

    static delete = (firestore, callback, id) => {

        firestore.collection('estudantes').doc(id).delete()
            .then(
                () => callback('Estudante apagado com sucesso.')
            )
            .catch(
                error => callback('Estudante não foi apgado.')
            )
    }

    static create = (firestore, callback, estudante) => {

        firestore.collection('estudantes').add(
            {
                nome: estudante.nome,
                curso: estudante.curso,
                IRA: estudante.IRA
            }
        )
            .then(() => callback('Estudante criado com sucesso.'))
            .catch(error => callback('Estudante não foi criado.'))
    }

    static retrieve = (firestore, callback, id) => {
        firestore.collection('estudantes').doc(id).get()
            .then(
                (doc) => {
                    callback(
                        {
                            nome: doc.data().nome,
                            curso: doc.data().curso,
                            IRA: doc.data().IRA
                        }
                    )
                }
            )
            .catch(error => callback(null))
    }

    static edit = (firestore, callback, estudante, id) => {
        firestore.collection('estudantes').doc(id).set(
            {
                nome: estudante.nome,
                curso: estudante.curso,
                IRA: estudante.IRA
            }
        )
        .then(() => callback('Estudante editado com sucesso.'))
        .catch((error) => callback('Estudante não foi atualizado.'))
    }
}