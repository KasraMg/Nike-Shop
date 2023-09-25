export type product={
    id:number,
    title:string,
    image:string,
    price:{
        current_price:number,
        prev_price:number
    },
    bg:string,
    star:number,
    image2:string,
    image3:string,
    Designed_by:string,
    size:[],
    description:string
}
 

export type productCart={
    id:number,
    title:string,
    image:string,
    price:{
        current_price:number,
        prev_price:number
    },
    bg:string,
    count:number,
    star:number
}