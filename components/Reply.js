import { useState } from 'react';
import styles from '../styles/ReplyComponentStyles.module.css';
import replyLoge from '../assets/reply.svg';
import Image from 'next/image';
import { useForm } from '../hooks/useForm';
import { Button } from './Button';


const repliesInitialState = {
    author: "",
    reply: "",
}

export const Reply = ({ commentId, author, reply, postAsyncReply }) => {
    const [values, handleInputChange, reset] = useForm(repliesInitialState);
    const [replyFormState, setReplyFormState] = useState(false);
    const toggleReplyForm = () => {
        setReplyFormState(!replyFormState);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        postAsyncReply({
            ...values,
            _id:commentId
        });
        reset();
        toggleReplyForm();
    }
    return (
        <>
            <article
                className={styles.replyContainer}
            >
                <span>{author}</span>
                <p>
                    {reply}
                </p>
                <div className={styles.commentIconsContainer}>
                    <div className={styles.commentOptionContainer}
                    onClick={toggleReplyForm}
                    >
                        <div
                            className={styles.commentIcon}
                        >
                            <Image
                                src={replyLoge}
                                alt="reply"
                                title="reply"
                            />

                        </div>
                        <span>Responder</span>
                    </div>
                </div>
                {
                    replyFormState &&
                    <form>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className={styles.inputText}
                            name="author"
                            value={values.author}
                            onChange={handleInputChange}
                        />
                        <textarea
                            placeholder="Respuesta"
                            className={styles.textArea}
                            name="reply"
                            value={values.reply}
                            onChange={handleInputChange}
                        >
                        </textarea>
                        <div
                            className={styles.buttonsContainer}
                        >
                            <Button
                                text="Cancelar"
                                onSubmit={toggleReplyForm}
                            />
                            <Button
                                theme="success"
                                text="Responder"
                                onSubmit={onSubmit}
                            />
                        </div>
                     </form>
                }
            </article>
        </>
    );
}