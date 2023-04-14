(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return l}});var r=t(5893),a=t(9008),i=t.n(a),o=t(1163),s=t(7294),c=t(9147),u=t.n(c);t(7319);let m=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let i=t(4631);n=i(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),c=(0,s.useRef)(null),m=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),l=(0,o.useRouter)(),p=l.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[d,f]=(0,s.useState)(null),[g,h]=(0,s.useState)(null);return(0,s.useEffect)(()=>{p?h(p[1]):h(a[0].name),m&&c.current&&c.current.appendChild(m.domElement);let t={active:!0},r=()=>{t.active=!1};try{let i=n.current,o=e.init({canvas:i,pageState:t,gui:m});o instanceof Promise&&o.catch(e=>{console.error(e),f(e)})}catch(s){console.error(s),f(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,r.jsx)("p",{children:"".concat(d)})]}):null]}),(0,r.jsxs)("div",{className:u().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:u().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":g==e.name,onClick(){h(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:u().sourceFileContainer,"data-active":g==e.name},n))]})]})},l=e=>(0,r.jsx)(m,{...e})},4655:function(e,n,t){"use strict";t.d(n,{Ax:function(){return i},MO:function(){return o},O$:function(){return r},v8:function(){return a},zS:function(){return s}});let r=40,a=0,i=32,o=36,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},1432:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(5975),a=t(7160),i=t(5671),o=t(4655),s=t(3569),c="@group(0) @binding(1) var mySampler: sampler;\n@group(0) @binding(2) var myTexture: texture_cube<f32>;\n\n@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  // Our camera and the skybox cube are both centered at (0, 0, 0)\n  // so we can use the cube geomtry position to get viewing vector to sample the cube texture.\n  // The magnitude of the vector doesn't matter.\n  var cubemapVec = fragPosition.xyz - vec3(0.5);\n  return textureSample(myTexture, mySampler, cubemapVec);\n}\n",u="src/sample/cubemap/main.ts";let m=async e=>{let n,{canvas:i,pageState:u}=e,m=await navigator.gpu.requestAdapter(),l=await m.requestDevice();if(!u.active)return;let p=i.getContext("webgpu"),d=window.devicePixelRatio||1;i.width=i.clientWidth*d,i.height=i.clientHeight*d;let f=navigator.gpu.getPreferredCanvasFormat();p.configure({device:l,format:f,alphaMode:"premultiplied"});let g=l.createBuffer({size:o.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(g.getMappedRange()).set(o.zS),g.unmap();let h=l.createRenderPipeline({layout:"auto",vertex:{module:l.createShaderModule({code:s.Z}),entryPoint:"main",buffers:[{arrayStride:o.O$,attributes:[{shaderLocation:0,offset:o.v8,format:"float32x4"},{shaderLocation:1,offset:o.Ax,format:"float32x2"}]}]},fragment:{module:l.createShaderModule({code:c}),entryPoint:"main",targets:[{format:f}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),x=l.createTexture({size:[i.width,i.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});{let b=[new t.U(t(8511)).toString(),new t.U(t(5408)).toString(),new t.U(t(3264)).toString(),new t.U(t(2885)).toString(),new t.U(t(459)).toString(),new t.U(t(5450)).toString()],v=b.map(e=>{let n=document.createElement("img");return n.src=e,n.decode().then(()=>createImageBitmap(n))}),w=await Promise.all(v);n=l.createTexture({dimension:"2d",size:[w[0].width,w[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});for(let P=0;P<w.length;P++){let S=w[P];l.queue.copyExternalImageToTexture({source:S},{texture:n,origin:[0,0,P]},[S.width,S.height])}}let U=l.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),y=l.createSampler({magFilter:"linear",minFilter:"linear"}),T=l.createBindGroup({layout:h.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:U,offset:0,size:64}},{binding:1,resource:y},{binding:2,resource:n.createView({dimension:"cube"})}]}),C={colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:x.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},M=i.width/i.height,j=r.Ue();r.G3(j,2*Math.PI/5,M,1,3e3);let V=r.Ue();r.bA(V,V,a.al(1e3,1e3,1e3));let B=r.Ue(),E=r.Ue(),G=r.Ue();requestAnimationFrame(function e(){if(!u.active)return;!function(){let e=Date.now()/800;r.U1(G,E,Math.PI/10*Math.sin(e),a.al(1,0,0)),r.U1(G,G,.2*e,a.al(0,1,0)),r.Jp(B,G,V),r.Jp(B,j,B)}(),l.queue.writeBuffer(U,0,B.buffer,B.byteOffset,B.byteLength),C.colorAttachments[0].view=p.getCurrentTexture().createView();let n=l.createCommandEncoder(),t=n.beginRenderPass(C);t.setPipeline(h),t.setVertexBuffer(0,g),t.setBindGroup(0,T),t.draw(o.MO,1,0,0),t.end(),l.queue.submit([n.finish()]),requestAnimationFrame(e)})},l=()=>(0,i.T)({name:"Cubemap",description:"This example shows how to render and sample from a cubemap texture.",init:m,sources:[{name:u.substring(19),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport sampleCubemapWGSL from './sampleCubemap.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: sampleCubemapWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Since we are seeing from inside of the cube\n      // and we are using the regular cube geomtry data with outward-facing normals,\n      // the cullMode should be 'front' or 'none'.\n      cullMode: 'none',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  // Fetch the 6 separate images for negative/positive x, y, z axis of a cubemap\n  // and upload it into a GPUTexture.\n  let cubemapTexture: GPUTexture;\n  {\n    // The order of the array layers is [+X, -X, +Y, -Y, +Z, -Z]\n    const imgSrcs = [\n      new URL(\n        `../../../assets/img/cubemap/posx.jpg`,\n        import.meta.url\n      ).toString(),\n      new URL(\n        `../../../assets/img/cubemap/negx.jpg`,\n        import.meta.url\n      ).toString(),\n      new URL(\n        `../../../assets/img/cubemap/posy.jpg`,\n        import.meta.url\n      ).toString(),\n      new URL(\n        `../../../assets/img/cubemap/negy.jpg`,\n        import.meta.url\n      ).toString(),\n      new URL(\n        `../../../assets/img/cubemap/posz.jpg`,\n        import.meta.url\n      ).toString(),\n      new URL(\n        `../../../assets/img/cubemap/negz.jpg`,\n        import.meta.url\n      ).toString(),\n    ];\n    const promises = imgSrcs.map((src) => {\n      const img = document.createElement('img');\n      img.src = src;\n      return img.decode().then(() => createImageBitmap(img));\n    });\n    const imageBitmaps = await Promise.all(promises);\n\n    cubemapTexture = device.createTexture({\n      dimension: '2d',\n      // Create a 2d array texture.\n      // Assume each image has the same size.\n      size: [imageBitmaps[0].width, imageBitmaps[0].height, 6],\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.TEXTURE_BINDING |\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.RENDER_ATTACHMENT,\n    });\n\n    for (let i = 0; i < imageBitmaps.length; i++) {\n      const imageBitmap = imageBitmaps[i];\n      device.queue.copyExternalImageToTexture(\n        { source: imageBitmap },\n        { texture: cubemapTexture, origin: [0, 0, i] },\n        [imageBitmap.width, imageBitmap.height]\n      );\n    }\n  }\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: 0,\n          size: uniformBufferSize,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubemapTexture.createView({\n          dimension: 'cube',\n        }),\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 3000);\n\n  const modelMatrix = mat4.create();\n  mat4.scale(modelMatrix, modelMatrix, vec3.fromValues(1000, 1000, 1000));\n  const modelViewProjectionMatrix = mat4.create() as Float32Array;\n  const viewMatrix = mat4.create();\n\n  const tmpMat4 = mat4.create();\n\n  // Comppute camera movement:\n  // It rotates around Y axis with a slight pitch movement.\n  function updateTransformationMatrix() {\n    const now = Date.now() / 800;\n\n    mat4.rotate(\n      tmpMat4,\n      viewMatrix,\n      (Math.PI / 10) * Math.sin(now),\n      vec3.fromValues(1, 0, 0)\n    );\n    mat4.rotate(tmpMat4, tmpMat4, now * 0.2, vec3.fromValues(0, 1, 0));\n\n    mat4.multiply(modelViewProjectionMatrix, tmpMat4, modelMatrix);\n    mat4.multiply(\n      modelViewProjectionMatrix,\n      projectionMatrix,\n      modelViewProjectionMatrix\n    );\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjectionMatrix.buffer,\n      modelViewProjectionMatrix.byteOffset,\n      modelViewProjectionMatrix.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst CubemapCubes: () => JSX.Element = () =>\n  makeSample({\n    name: 'Cubemap',\n    description:\n      'This example shows how to render and sample from a cubemap texture.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: './sampleCubemap.frag.wgsl',\n        contents: sampleCubemapWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default CubemapCubes;\n"},{name:"../../shaders/basic.vert.wgsl",contents:s.Z,editable:!0},{name:"./sampleCubemap.frag.wgsl",contents:c,editable:!0},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:u});var p=l},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n]);\n"},3569:function(e,n){"use strict";n.Z="struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));\n  return output;\n}\n"},5408:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/cubemap/negx.8b7d6335c5578c00.jpg"},2885:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/cubemap/negy.6ff91fb0dd77089a.jpg"},5450:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/cubemap/negz.9f1b40f803d5fb3a.jpg"},8511:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/cubemap/posx.87997a8f91af66f1.jpg"},3264:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/cubemap/posy.fed5fc4c9c673958.jpg"},459:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/cubemap/posz.9abd46cb7a6b51b7.jpg"}}]);