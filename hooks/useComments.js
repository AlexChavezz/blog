import { useContext, useState } from "react";
import { Comments } from "../context/Comments";


export const useComments = () => {
    const { comments, setComments } = useContext(Comments);

    

   

    const postAsyncReply = async (document) => {
        try {
            const response = await fetch('http://localhost:8080/api/comments/save-reply', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(document)
            });
            const data = await response.json();
            console.log(data);
            if (data.insertedId) {
                const { _id, ...rest } = document;
                postSyncReply(_id, { ...rest, reply_id: data.insertedId });
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            toggleReplyForm();
        }
    } 


    






    const toggleReplyForm = () => {
        setReplyFormState(!replyFormState);
    }




    return {
        comments,
        getComments,
        postSyncReply,
        replyFormState,
        toggleReplyForm,
        postAsyncReply
    };
}