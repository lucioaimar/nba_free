export function getSizeWithAspectRatio(width: number, aspectRatio:number): ImgSize{
    return {
        width: width,
        height: Math.round(width / aspectRatio)
    }
}

export interface ImgSize {
    width: number;
    height:number;
}