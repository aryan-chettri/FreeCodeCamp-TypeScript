interface Point{

    x: number;
    y: string;
    z: boolean;
}

function logPoint(p: Point){

    console.log(`${p.x}, ${p.y}, ${p.z}`)
}

const point = {x:12, y: "Arpan", z: false};
logPoint(point);

export {}