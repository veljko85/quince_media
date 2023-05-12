'use client'
import { ArcRotateCamera, Vector3, DirectionalLight, HemisphericLight, SpotLight, MeshBuilder, SceneLoader, ShadowGenerator, Color3, PBRMaterial, CubeTexture, Texture, StandardMaterial} from "@babylonjs/core";
import '@babylonjs/loaders/glTF';
import SceneComponent from "./SceneComponent"; // uses above component in same directory


const onSceneReady = (scene) => {
  const canvas = scene.getEngine().getRenderingCanvas();
  scene.clearColor = Color3.FromHexString('#DAA520')
  var camera = new ArcRotateCamera(
    'camera1',
    Math.PI / 2,
    Math.PI / 2,
    3,
    new Vector3(0, 1, 0),
    scene
  );
  camera.attachControl(canvas, true);
  camera.setPosition(new Vector3(-3, 4, 10));
  camera.minZ = 0.1;
  camera.fov = 0.4;
  camera.lowerRadiusLimit = 2;
  camera.upperRadiusLimit = 20;
  camera.wheelDeltaPercentage = 0.01;
  camera.upperBetaLimit = 1.2;

  // const light2 = new HemisphericLight("light2", new Vector3(1, 1, 0), scene);
  // light2.intensity = 0.1;

  var light = new DirectionalLight("light", new Vector3(5, -5, 5), scene);
  light.diffuse = new Color3(17, 16, 14);
  light.specular = new Color3(15, 15, 15);
  //var light = new PointLight("light", new BABYLON.Vector3(0, 0, 0), scene);
  // var light = new SpotLight("light", new Vector3(10, -12, 5), new Vector3(-1, -1, -1), Math.PI/4, 50, scene);

  light.intensity = 0.3;

    var ground = MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
    var pbrGround = new PBRMaterial("pbrPink", scene);
    pbrGround.albedoColor = Color3.FromHexString('#DAA520').toLinearSpace();
    pbrGround.metallic = 0;
    pbrGround.roughness = 1;
    
    ground.material = pbrGround;
    ground.receiveShadows = true; 
    
    //shadow
    var sg = new ShadowGenerator(2048, light);
    sg.useBlurExponentialShadowMap = true;
    sg.blurBoxOffset = 15;
    sg.setDarkness(0.7);



    //gold material
    var pbr = new PBRMaterial("pbr", scene);
    pbr.albedoColor = Color3.FromHexString('#a67c00');
    pbr.metallic = 1.0;
    pbr.roughness = 0;
    pbr.reflectionTexture = CubeTexture.CreateFromPrefilteredData("/assets/environment.env", scene);
    pbr.reflectionTexture.rotationY = 1.3;
    pbr.bumpTexture = new Texture("/assets/gold-scuffed-bl/normalMap.jpg", scene);
    pbr.metallicTexture = new Texture("/assets/gold-scuffed-bl/gold-scuffed_metallic.png", scene);
    pbr.useRoughnessFromMetallicTextureAlpha = false;
    pbr.useRoughnessFromMetallicTextureGreen = true;
    pbr.useMetallnessFromMetallicTextureBlue = true;
    pbr.bumpTexture.uScale = 20; // width
    pbr.bumpTexture.vScale = 20; // height

    var pbrWhite = new PBRMaterial("pbrWhite", scene);
    pbrWhite.albedoColor = Color3.FromHexString('#ffffff');
    pbrWhite.metallic = 0;
    pbrWhite.roughness = 1;

    var pbrPink = new PBRMaterial("pbrPink", scene);
    pbrPink.albedoColor = Color3.FromHexString('#e8888e').toLinearSpace();
    pbrPink.metallic = 0;
    pbrPink.roughness = 1;

  // SceneLoader.ImportMeshAsync(
  //   "",
  //   "/assets/meshes/",
  //   "suzana.glb",
  //   scene
  // ).then((result) => {
  //   let suzana = result.meshes[0];
  //   suzana.position.y =0.5;
  //   sg.addShadowCaster(suzana);
  //   suzana.addRotation(0.6,0,0)
    
  //   for (let i = 0; i < result.meshes.length; i++) {
  //     result.meshes[i].material = pbr;
  //     if(i != 0)result.meshes[i].material.backFaceCulling = false;
  //   }
  //   // shadowGenerator.addShadowCaster(suzana, true);
  // });
  // Our built-in 'box' shape.
  let box = MeshBuilder.CreateBox("box", { size: 0.5 }, scene);
  box.position = new Vector3(-2, 0.25, 0.2);
  box.addRotation(0,0.8,0)
  box.material = pbrPink;
};

export default () => (
  <div>
    <SceneComponent antialias onSceneReady={onSceneReady}/* onRender={onRender} */id="my-canvas" />
  </div>
);