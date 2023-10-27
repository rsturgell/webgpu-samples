(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return m},hu:function(){return f}});var r=t(5893),a=t(9008),i=t.n(a),o=t(1163),s=t(7294),c=t(9147),u=t.n(c);t(7319);let l=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let i=t(4631);n=i(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),c=(0,s.useRef)(null),l=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),m=(0,s.useRef)(null),f=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),d=(0,o.useRouter)(),p=d.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[g,h]=(0,s.useState)(null),[x,v]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(p?v(p[1]):v(a[0].name),l&&c.current)for(c.current.appendChild(l.domElement);l.__controllers.length>0;)l.__controllers[0].remove();f&&m.current&&(f.dom.style.position="absolute",f.showPanel(1),m.current.appendChild(f.dom));let t={active:!0},r=()=>{t.active=!1};try{let i=n.current;if(!i)throw Error("The canvas is not available");let o=e.init({canvas:i,pageState:t,gui:l,stats:f});o instanceof Promise&&o.catch(e=>{console.error(e),h(e)})}catch(s){console.error(s),h(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(g)})]}):null]}),(0,r.jsxs)("div",{className:u().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:m}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:u().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":x==e.name,onClick(){v(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:u().sourceFileContainer,"data-active":x==e.name},n))]})]})},m=e=>(0,r.jsx)(l,{...e});function f(e,n){if(!e)throw Error(n)}},4655:function(e,n,t){"use strict";t.d(n,{Ax:function(){return i},MO:function(){return o},O$:function(){return r},v8:function(){return a},zS:function(){return s}});let r=40,a=0,i=32,o=36,s=new Float32Array([1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,1,0,1,-1,-1,1,1,0,0,1,0,0,1,-1,1,1,1,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,1,0,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,-1,1,-1,1,0,1,0,1,0,0,-1,1,1,1,0,1,1,1,0,1,1,1,-1,1,1,1,0,1,1,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,1,-1,1,0,1,0,1,1,0,-1,-1,-1,1,0,0,0,1,0,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,-1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,0,-1,-1,1,1,0,0,1,1,1,0,1,-1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,0,1,-1,-1,-1,1,0,0,0,1,1,1,-1,1,-1,1,0,1,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,-1,-1,1,1,0,0,1,0,1,-1,1,-1,1,0,1,0,1,1,0])},613:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(6416),a=t(5671),i=t(4655),o=t(3569),s="@group(0) @binding(1) var mySampler: sampler;\n@group(0) @binding(2) var myTexture: texture_2d<f32>;\n\n@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  return textureSample(myTexture, mySampler, fragUV) * fragPosition;\n}\n",c="src/sample/texturedCube/main.ts";let u=async e=>{let n,{canvas:a,pageState:c}=e,u=await navigator.gpu.requestAdapter(),l=await u.requestDevice();if(!c.active)return;let m=a.getContext("webgpu"),f=window.devicePixelRatio;a.width=a.clientWidth*f,a.height=a.clientHeight*f;let d=navigator.gpu.getPreferredCanvasFormat();m.configure({device:l,format:d,alphaMode:"premultiplied"});let p=l.createBuffer({size:i.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(p.getMappedRange()).set(i.zS),p.unmap();let g=l.createRenderPipeline({layout:"auto",vertex:{module:l.createShaderModule({code:o.Z}),entryPoint:"main",buffers:[{arrayStride:i.O$,attributes:[{shaderLocation:0,offset:i.v8,format:"float32x4"},{shaderLocation:1,offset:i.Ax,format:"float32x2"}]}]},fragment:{module:l.createShaderModule({code:s}),entryPoint:"main",targets:[{format:d}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),h=l.createTexture({size:[a.width,a.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),x=l.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});{let v=await fetch(new t.U(t(5685)).toString()),b=await createImageBitmap(await v.blob());n=l.createTexture({size:[b.width,b.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),l.queue.copyExternalImageToTexture({source:b},{texture:n},[b.width,b.height])}let w=l.createSampler({magFilter:"linear",minFilter:"linear"}),T=l.createBindGroup({layout:g.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:x}},{binding:1,resource:w},{binding:2,resource:n.createView()}]}),P={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:h.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},y=a.width/a.height,C=r._E.perspective(2*Math.PI/5,y,1,100),S=r._E.create();requestAnimationFrame(function e(){if(!c.active)return;let n=function(){let e=r._E.identity();r._E.translate(e,r.R3.fromValues(0,0,-4),e);let n=Date.now()/1e3;return r._E.rotate(e,r.R3.fromValues(Math.sin(n),Math.cos(n),0),1,e),r._E.multiply(C,e,S),S}();l.queue.writeBuffer(x,0,n.buffer,n.byteOffset,n.byteLength),P.colorAttachments[0].view=m.getCurrentTexture().createView();let t=l.createCommandEncoder(),a=t.beginRenderPass(P);a.setPipeline(g),a.setBindGroup(0,T),a.setVertexBuffer(0,p),a.draw(i.MO),a.end(),l.queue.submit([t.finish()]),requestAnimationFrame(e)})},l=()=>(0,a.Tl)({name:"Textured Cube",description:"This example shows how to bind and sample textures.",init:u,sources:[{name:c.substring(24),contents:"import { mat4, vec3 } from 'wgpu-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport sampleTextureMixColorWGSL from './sampleTextureMixColor.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: sampleTextureMixColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  // Fetch the image and upload it into a GPUTexture.\n  let cubeTexture: GPUTexture;\n  {\n    const response = await fetch(\n      new URL('../../../assets/img/Di-3d.png', import.meta.url).toString()\n    );\n    const imageBitmap = await createImageBitmap(await response.blob());\n\n    cubeTexture = device.createTexture({\n      size: [imageBitmap.width, imageBitmap.height, 1],\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.TEXTURE_BINDING |\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.RENDER_ATTACHMENT,\n    });\n    device.queue.copyExternalImageToTexture(\n      { source: imageBitmap },\n      { texture: cubeTexture },\n      [imageBitmap.width, imageBitmap.height]\n    );\n  }\n\n  // Create a sampler with linear filtering for smooth interpolation.\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubeTexture.createView(),\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.perspective(\n    (2 * Math.PI) / 5,\n    aspect,\n    1,\n    100.0\n  );\n  const modelViewProjectionMatrix = mat4.create();\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.identity();\n    mat4.translate(viewMatrix, vec3.fromValues(0, 0, -4), viewMatrix);\n    const now = Date.now() / 1000;\n    mat4.rotate(\n      viewMatrix,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0),\n      1,\n      viewMatrix\n    );\n\n    mat4.multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const transformationMatrix = getTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst TexturedCube: () => JSX.Element = () =>\n  makeSample({\n    name: 'Textured Cube',\n    description: 'This example shows how to bind and sample textures.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: './sampleTextureMixColor.frag.wgsl',\n        contents: sampleTextureMixColorWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default TexturedCube;\n"},{name:"../../shaders/basic.vert.wgsl",contents:o.Z,editable:!0},{name:"./sampleTextureMixColor.frag.wgsl",contents:s,editable:!0},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:c});var m=l},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n]);\n"},3569:function(e,n){"use strict";n.Z="struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));\n  return output;\n}\n"},5685:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/Di-3d.ba319100a0ec2120.png"}}]);