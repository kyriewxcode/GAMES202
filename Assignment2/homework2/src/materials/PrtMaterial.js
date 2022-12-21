class PrtMaterial extends Material {
    constructor(color, specular, light, translate, scale, vertexShader, fragmentShader) {

    }
}

async function buildPrtMaterial(color, specular, light, translate, scale, vertexPath, fragmentPath) {

    let vertexShader = await getShaderString(vertexPath);
    let fragmentShader = await getShaderString(fragmentPath);

    return new PrtMaterial(color, specular, light, translate, scale, vertexShader, fragmentShader);
}