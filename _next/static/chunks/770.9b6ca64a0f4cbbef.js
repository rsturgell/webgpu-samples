(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[770],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return d},hu:function(){return p}});var r=t(5893),i=t(9008),a=t.n(i),o=t(1163),u=t(7294),s=t(9147),c=t.n(s);t(7319);let l=e=>{let n=(0,u.useRef)(null),i=(0,u.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:i}=e;return{name:n,...function(e){let n;let i=null;{i=document.createElement("div");let a=t(4631);n=a(i,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){i&&t&&(t.appendChild(i),n.setOption("value",e))}})})}}}(i)}}),e.sources),s=(0,u.useRef)(null),l=(0,u.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),d=(0,u.useRef)(null),p=(0,u.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),m=(0,o.useRouter)(),g=m.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[f,h]=(0,u.useState)(null),[v,b]=(0,u.useState)(null);return(0,u.useEffect)(()=>{if(g?b(g[1]):b(i[0].name),l&&s.current)for(s.current.appendChild(l.domElement);l.__controllers.length>0;)l.__controllers[0].remove();p&&d.current&&(p.dom.style.position="absolute",p.showPanel(1),d.current.appendChild(p.dom));let t={active:!0},r=()=>{t.active=!1};try{let a=n.current;if(!a)throw Error("The canvas is not available");let o=e.init({canvas:a,pageState:t,gui:l,stats:p});o instanceof Promise&&o.catch(e=>{console.error(e),h(e)})}catch(u){console.error(u),h(u)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(f)})]}):null]}),(0,r.jsxs)("div",{className:c().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:d}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:s}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:c().sourceFileNav,children:(0,r.jsx)("ul",{children:i.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick(){b(e.name)},children:e.name})},n))})}),i.map((e,n)=>(0,r.jsx)(e.Container,{className:c().sourceFileContainer,"data-active":v==e.name},n))]})]})},d=e=>(0,r.jsx)(l,{...e});function p(e,n){if(!e)throw Error(n)}},1770:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5671),i="struct Params {\n  filterDim : i32,\n  blockDim : u32,\n}\n\n@group(0) @binding(0) var samp : sampler;\n@group(0) @binding(1) var<uniform> params : Params;\n@group(1) @binding(1) var inputTex : texture_2d<f32>;\n@group(1) @binding(2) var outputTex : texture_storage_2d<rgba8unorm, write>;\n\nstruct Flip {\n  value : u32,\n}\n@group(1) @binding(3) var<uniform> flip : Flip;\n\n// This shader blurs the input texture in one direction, depending on whether\n// |flip.value| is 0 or 1.\n// It does so by running (128 / 4) threads per workgroup to load 128\n// texels into 4 rows of shared memory. Each thread loads a\n// 4 x 4 block of texels to take advantage of the texture sampling\n// hardware.\n// Then, each thread computes the blur result by averaging the adjacent texel values\n// in shared memory.\n// Because we're operating on a subset of the texture, we cannot compute all of the\n// results since not all of the neighbors are available in shared memory.\n// Specifically, with 128 x 128 tiles, we can only compute and write out\n// square blocks of size 128 - (filterSize - 1). We compute the number of blocks\n// needed in Javascript and dispatch that amount.\n\nvar<workgroup> tile : array<array<vec3<f32>, 128>, 4>;\n\n@compute @workgroup_size(32, 1, 1)\nfn main(\n  @builtin(workgroup_id) WorkGroupID : vec3<u32>,\n  @builtin(local_invocation_id) LocalInvocationID : vec3<u32>\n) {\n  let filterOffset = (params.filterDim - 1) / 2;\n  let dims = vec2<i32>(textureDimensions(inputTex, 0));\n  let baseIndex = vec2<i32>(WorkGroupID.xy * vec2(params.blockDim, 4) +\n                            LocalInvocationID.xy * vec2(4, 1))\n                  - vec2(filterOffset, 0);\n\n  for (var r = 0; r < 4; r++) {\n    for (var c = 0; c < 4; c++) {\n      var loadIndex = baseIndex + vec2(c, r);\n      if (flip.value != 0u) {\n        loadIndex = loadIndex.yx;\n      }\n\n      tile[r][4 * LocalInvocationID.x + u32(c)] = textureSampleLevel(\n        inputTex,\n        samp,\n        (vec2<f32>(loadIndex) + vec2<f32>(0.25, 0.25)) / vec2<f32>(dims),\n        0.0\n      ).rgb;\n    }\n  }\n\n  workgroupBarrier();\n\n  for (var r = 0; r < 4; r++) {\n    for (var c = 0; c < 4; c++) {\n      var writeIndex = baseIndex + vec2(c, r);\n      if (flip.value != 0) {\n        writeIndex = writeIndex.yx;\n      }\n\n      let center = i32(4 * LocalInvocationID.x) + c;\n      if (center >= filterOffset &&\n          center < 128 - filterOffset &&\n          all(writeIndex < dims)) {\n        var acc = vec3(0.0, 0.0, 0.0);\n        for (var f = 0; f < params.filterDim; f++) {\n          var i = center + f - filterOffset;\n          acc = acc + (1.0 / f32(params.filterDim)) * tile[r][i];\n        }\n        textureStore(outputTex, writeIndex, vec4(acc, 1.0));\n      }\n    }\n  }\n}\n",a=t(134),o="src/sample/imageBlur/main.ts";let u=async e=>{let n,{canvas:r,pageState:o,gui:u}=e,s=await navigator.gpu.requestAdapter(),c=await s.requestDevice();if(!o.active)return;let l=r.getContext("webgpu"),d=window.devicePixelRatio;r.width=r.clientWidth*d,r.height=r.clientHeight*d;let p=navigator.gpu.getPreferredCanvasFormat();l.configure({device:c,format:p,alphaMode:"premultiplied"});let m=c.createComputePipeline({layout:"auto",compute:{module:c.createShaderModule({code:i}),entryPoint:"main"}}),g=c.createRenderPipeline({layout:"auto",vertex:{module:c.createShaderModule({code:a.Z}),entryPoint:"vert_main"},fragment:{module:c.createShaderModule({code:a.Z}),entryPoint:"frag_main",targets:[{format:p}]},primitive:{topology:"triangle-list"}}),f=c.createSampler({magFilter:"linear",minFilter:"linear"}),h=await fetch(new t.U(t(5685)).toString()),v=await createImageBitmap(await h.blob()),[b,x]=[v.width,v.height],w=c.createTexture({size:[b,x,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});c.queue.copyExternalImageToTexture({source:v},{texture:w},[v.width,v.height]);let P=[0,1].map(()=>c.createTexture({size:{width:b,height:x},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING})),G=(()=>{let e=c.createBuffer({size:4,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM});return new Uint32Array(e.getMappedRange())[0]=0,e.unmap(),e})(),B=(()=>{let e=c.createBuffer({size:4,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM});return new Uint32Array(e.getMappedRange())[0]=1,e.unmap(),e})(),y=c.createBuffer({size:8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),T=c.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:f},{binding:1,resource:{buffer:y}}]}),U=c.createBindGroup({layout:m.getBindGroupLayout(1),entries:[{binding:1,resource:w.createView()},{binding:2,resource:P[0].createView()},{binding:3,resource:{buffer:G}}]}),S=c.createBindGroup({layout:m.getBindGroupLayout(1),entries:[{binding:1,resource:P[0].createView()},{binding:2,resource:P[1].createView()},{binding:3,resource:{buffer:B}}]}),_=c.createBindGroup({layout:m.getBindGroupLayout(1),entries:[{binding:1,resource:P[1].createView()},{binding:2,resource:P[0].createView()},{binding:3,resource:{buffer:G}}]}),I=c.createBindGroup({layout:g.getBindGroupLayout(0),entries:[{binding:0,resource:f},{binding:1,resource:P[1].createView()}]}),C={filterSize:15,iterations:2},M=()=>{n=128-(C.filterSize-1),c.queue.writeBuffer(y,0,new Uint32Array([C.filterSize,n]))};u.add(C,"filterSize",1,33).step(2).onChange(M),u.add(C,"iterations",1,10).step(1),M(),requestAnimationFrame(function e(){if(!o.active)return;let t=c.createCommandEncoder(),r=t.beginComputePass();r.setPipeline(m),r.setBindGroup(0,T),r.setBindGroup(1,U),r.dispatchWorkgroups(Math.ceil(b/n),Math.ceil(x/4)),r.setBindGroup(1,S),r.dispatchWorkgroups(Math.ceil(x/n),Math.ceil(b/4));for(let i=0;i<C.iterations-1;++i)r.setBindGroup(1,_),r.dispatchWorkgroups(Math.ceil(b/n),Math.ceil(x/4)),r.setBindGroup(1,S),r.dispatchWorkgroups(Math.ceil(x/n),Math.ceil(b/4));r.end();let a=t.beginRenderPass({colorAttachments:[{view:l.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});a.setPipeline(g),a.setBindGroup(0,I),a.draw(6),a.end(),c.queue.submit([t.finish()]),requestAnimationFrame(e)})},s=()=>(0,r.Tl)({name:"Image Blur",description:"This example shows how to blur an image using a WebGPU compute shader.",gui:!0,init:u,sources:[{name:o.substring(21),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport blurWGSL from './blur.wgsl';\nimport fullscreenTexturedQuadWGSL from '../../shaders/fullscreenTexturedQuad.wgsl';\n\n// Contants from the blur.wgsl shader.\nconst tileDim = 128;\nconst batch = [4, 4];\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const blurPipeline = device.createComputePipeline({\n    layout: 'auto',\n    compute: {\n      module: device.createShaderModule({\n        code: blurWGSL,\n      }),\n      entryPoint: 'main',\n    },\n  });\n\n  const fullscreenQuadPipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: fullscreenTexturedQuadWGSL,\n      }),\n      entryPoint: 'vert_main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fullscreenTexturedQuadWGSL,\n      }),\n      entryPoint: 'frag_main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const response = await fetch(\n    new URL('../../../assets/img/Di-3d.png', import.meta.url).toString()\n  );\n  const imageBitmap = await createImageBitmap(await response.blob());\n\n  const [srcWidth, srcHeight] = [imageBitmap.width, imageBitmap.height];\n  const cubeTexture = device.createTexture({\n    size: [srcWidth, srcHeight, 1],\n    format: 'rgba8unorm',\n    usage:\n      GPUTextureUsage.TEXTURE_BINDING |\n      GPUTextureUsage.COPY_DST |\n      GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n  device.queue.copyExternalImageToTexture(\n    { source: imageBitmap },\n    { texture: cubeTexture },\n    [imageBitmap.width, imageBitmap.height]\n  );\n\n  const textures = [0, 1].map(() => {\n    return device.createTexture({\n      size: {\n        width: srcWidth,\n        height: srcHeight,\n      },\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.STORAGE_BINDING |\n        GPUTextureUsage.TEXTURE_BINDING,\n    });\n  });\n\n  const buffer0 = (() => {\n    const buffer = device.createBuffer({\n      size: 4,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = 0;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  const buffer1 = (() => {\n    const buffer = device.createBuffer({\n      size: 4,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = 1;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  const blurParamsBuffer = device.createBuffer({\n    size: 8,\n    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,\n  });\n\n  const computeConstants = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: sampler,\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: blurParamsBuffer,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup0 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: cubeTexture.createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer0,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup1 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[1].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer1,\n        },\n      },\n    ],\n  });\n\n  const computeBindGroup2 = device.createBindGroup({\n    layout: blurPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 1,\n        resource: textures[1].createView(),\n      },\n      {\n        binding: 2,\n        resource: textures[0].createView(),\n      },\n      {\n        binding: 3,\n        resource: {\n          buffer: buffer0,\n        },\n      },\n    ],\n  });\n\n  const showResultBindGroup = device.createBindGroup({\n    layout: fullscreenQuadPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: sampler,\n      },\n      {\n        binding: 1,\n        resource: textures[1].createView(),\n      },\n    ],\n  });\n\n  const settings = {\n    filterSize: 15,\n    iterations: 2,\n  };\n\n  let blockDim: number;\n  const updateSettings = () => {\n    blockDim = tileDim - (settings.filterSize - 1);\n    device.queue.writeBuffer(\n      blurParamsBuffer,\n      0,\n      new Uint32Array([settings.filterSize, blockDim])\n    );\n  };\n  gui.add(settings, 'filterSize', 1, 33).step(2).onChange(updateSettings);\n  gui.add(settings, 'iterations', 1, 10).step(1);\n\n  updateSettings();\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const computePass = commandEncoder.beginComputePass();\n    computePass.setPipeline(blurPipeline);\n    computePass.setBindGroup(0, computeConstants);\n\n    computePass.setBindGroup(1, computeBindGroup0);\n    computePass.dispatchWorkgroups(\n      Math.ceil(srcWidth / blockDim),\n      Math.ceil(srcHeight / batch[1])\n    );\n\n    computePass.setBindGroup(1, computeBindGroup1);\n    computePass.dispatchWorkgroups(\n      Math.ceil(srcHeight / blockDim),\n      Math.ceil(srcWidth / batch[1])\n    );\n\n    for (let i = 0; i < settings.iterations - 1; ++i) {\n      computePass.setBindGroup(1, computeBindGroup2);\n      computePass.dispatchWorkgroups(\n        Math.ceil(srcWidth / blockDim),\n        Math.ceil(srcHeight / batch[1])\n      );\n\n      computePass.setBindGroup(1, computeBindGroup1);\n      computePass.dispatchWorkgroups(\n        Math.ceil(srcHeight / blockDim),\n        Math.ceil(srcWidth / batch[1])\n      );\n    }\n\n    computePass.end();\n\n    const passEncoder = commandEncoder.beginRenderPass({\n      colorAttachments: [\n        {\n          view: context.getCurrentTexture().createView(),\n          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          loadOp: 'clear',\n          storeOp: 'store',\n        },\n      ],\n    });\n\n    passEncoder.setPipeline(fullscreenQuadPipeline);\n    passEncoder.setBindGroup(0, showResultBindGroup);\n    passEncoder.draw(6);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst ImageBlur: () => JSX.Element = () =>\n  makeSample({\n    name: 'Image Blur',\n    description:\n      'This example shows how to blur an image using a WebGPU compute shader.',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './blur.wgsl',\n        contents: blurWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/fullscreenTexturedQuad.wgsl',\n        contents: fullscreenTexturedQuadWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ImageBlur;\n"},{name:"./blur.wgsl",contents:i,editable:!0},{name:"../../shaders/fullscreenTexturedQuad.wgsl",contents:a.Z,editable:!0}],filename:o});var c=s},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},134:function(e,n){"use strict";n.Z="@group(0) @binding(0) var mySampler : sampler;\n@group(0) @binding(1) var myTexture : texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n}\n\n@vertex\nfn vert_main(@builtin(vertex_index) VertexIndex : u32) -> VertexOutput {\n  const pos = array(\n    vec2( 1.0,  1.0),\n    vec2( 1.0, -1.0),\n    vec2(-1.0, -1.0),\n    vec2( 1.0,  1.0),\n    vec2(-1.0, -1.0),\n    vec2(-1.0,  1.0),\n  );\n\n  const uv = array(\n    vec2(1.0, 0.0),\n    vec2(1.0, 1.0),\n    vec2(0.0, 1.0),\n    vec2(1.0, 0.0),\n    vec2(0.0, 1.0),\n    vec2(0.0, 0.0),\n  );\n\n  var output : VertexOutput;\n  output.Position = vec4(pos[VertexIndex], 0.0, 1.0);\n  output.fragUV = uv[VertexIndex];\n  return output;\n}\n\n@fragment\nfn frag_main(@location(0) fragUV : vec2<f32>) -> @location(0) vec4<f32> {\n  return textureSample(myTexture, mySampler, fragUV);\n}\n"},5685:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/Di-3d.ba319100a0ec2120.png"}}]);