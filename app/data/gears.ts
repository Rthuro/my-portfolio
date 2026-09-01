import keyboard from "../assets/gear/keyboard.png"
import mouse from "../assets/gear/mouse.png"
import laptop from "../assets/gear/laptop.png"
import table from "../assets/gear/table.png"
import monitor from "../assets/gear/monitor.png"


type Gear = {
    id:string;
    img: string;
    link: string;
    name: string;
    experience: string;
}

export const gears : Gear[] = [
    {
        id: "keyboard",
        img: keyboard.src,
        link: "",
        name: "AJAZZ K685T Mechanical Keyboard",
        experience: "love the wireless feature",
    },  {
        id: "mouse",
        img: mouse.src,
        link: "",
        name: "Hytac HGS965 Optical Mouse",
        experience: "had this for 3+ years and still works, small and lightweight.",
    },
     {
        id: "laptop",
        img: laptop.src,
        link: "",
        name: "Lenovo Ideapad 1 15AMN7 Ryzen 3 7320U",
        experience: "got broke 2 times because of the hinge but still works. can't carry heavy tasks anymore, but it gets the job done",
    },
     {
        id: "monitor",
        img: monitor.src,
        link: "",
        name: "LG 25MS500-B 75HZ/100Hz 24.5 inch IPS Monitor with AMD FreeSync",
        experience: "got broke 2 times because of the hinge but still works. can't carry heavy tasks anymore, but it gets the job done",
    }, {
        id: "table",
        img: table.src,
        link: "",
        name: "Foldable Table 60*120cm from fb marketplace",
        experience: "2+ years and still works",
    },
]