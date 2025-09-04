import {
    Orbitron,
    Rubik_Mono_One,
    Oi,
} from "next/font/google";

export const OrbitronFont = Orbitron({
    subsets : ['latin'],
    weight: ['400', '700' , "500" , "600" , "700" , "800" , "900"],
    variable :  "--font-orbitron"
})

export const RubikMonoOneFont = Rubik_Mono_One({
    subsets : ["latin"],
    weight: ["400"],
    variable :  "--font-rubik-mono-one"
})

export const OiFont = Oi({
    subsets : ["latin"],
    weight: ["400"],
    variable :  "--font-oi"
})