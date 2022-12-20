import { useState } from "react";
import styles from '../styles/CommentComponentStyles.module.css';
import replyLoge from '../assets/reply.svg';
import likeLoge from '../assets/like.svg';
import Image from "next/image";
import { Button } from "./Button";
import { useForm } from "../hooks/useForm";
import { Reply } from "./Reply";


const repliesInitialState = {
    author: "",
    reply: "",
}

export const Comment = (props) => {
    const [values, handleInputChange, reset] = useForm(repliesInitialState);
    const [replyFormState, setReplyFormState] = useState(false);
    const toggleReplyForm = () => {
        setReplyFormState(!replyFormState);
        reset();
    }
    const onSubmit = (e) => {
        e.preventDefault();
        props.postAsyncReply({
            ...values,
            _id: props._id
        });
        reset();
        toggleReplyForm();
    }
    return (
        <>
            <article className={styles.commentContainer}>
                <span>{props.author}</span>
                <p>{props.comment}</p>
                <div className={styles.commentIconsContainer}>
                    <div
                        className={styles.commentOptionContainer}
                    // onClick={toggleReplyForm}
                    >
                        <div
                            className={styles.commentIcon}
                        >
                            <Image
                                src={likeLoge}
                                alt="like"
                                title="like"
                            />
                        </div>
                        <span>{props.likes}</span>
                    </div>
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
                    <>
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
                    </>
                }
            </article>
            {
                props.replies &&
                props.replies.map((reply) => <Reply
                    {...reply}
                    key={reply.reply_id}
                    commentId={props._id}
                    postAsyncReply={props.postAsyncReply}
                />)
            }
        </>
    );
}