import { compareDesc, parseISO } from 'date-fns'
import { Blog } from 'contentlayer/generated';
export const mc = (...className: string[]) =>
  className.filter(Boolean).join(" "); //this will filter all the faulty values thats why used boolean in bracket and join separate all the array elements with a space
  
//sort 
export const sortPosts = (posts:Blog[]) => {
  return posts.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}