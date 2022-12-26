import fs from 'fs'; 
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export const getFiles = async () => fs.readdirSync(path.join(root, 'data'), "utf-8")

export const getFileBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(
        path.join(root, 'data', `${slug}.mdx`),
        "utf-8"
    );
    const { data, content } = await matter(mdxSource);
    const source = await serialize(content, {});
    return {
        source,
        frontMatter: {
            slug: slug,
            ...data,
        },
    }
}
export const getAllFilesMetadata = async () => {
    const posts = await getFiles();
    return posts.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, 'data', `${postSlug}`), "utf-8");
        const { data } = matter(mdxSource);
        return [{...data, slug: postSlug.replace(".mdx", "")}, ...allPosts];
    }, []);
}

/* HACER MAS EFICIENTE LA SIGUIENTE FUNCION */

export const getLastPostMetaData = async () => {
    let posts = await getAllFilesMetadata();
    let lastPost = posts[0] ;
    posts.forEach((post) => {
        if(post.post_id > lastPost.post_id){
            lastPost = post;
        } 
    });
    return lastPost;
}