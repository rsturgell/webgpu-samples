(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return p},hu:function(){return f}});var a=t(5893),r=t(9008),s=t.n(r),i=t(1163),o=t(7294),l=t(9147),c=t.n(l);t(7319);let u=e=>{let n=(0,o.useRef)(null),r=(0,o.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:r}=e;return{name:n,...function(e){let n;let r=null;{r=document.createElement("div");let s=t(4631);n=s(r,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,a.jsx)("div",{...t,children:(0,a.jsx)("div",{ref(t){r&&t&&(t.appendChild(r),n.setOption("value",e))}})})}}}(r)}}),e.sources),l=(0,o.useRef)(null),u=(0,o.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),p=(0,o.useRef)(null),f=(0,o.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),d=(0,i.useRouter)(),m=d.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[g,v]=(0,o.useState)(null),[P,h]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(m?h(m[1]):h(r[0].name),u&&l.current)for(l.current.appendChild(u.domElement);u.__controllers.length>0;)u.__controllers[0].remove();f&&p.current&&(f.dom.style.position="absolute",f.showPanel(1),p.current.appendChild(f.dom));let t={active:!0},a=()=>{t.active=!1};try{let s=n.current;if(!s)throw Error("The canvas is not available");let i=e.init({canvas:s,pageState:t,gui:u,stats:f});i instanceof Promise&&i.catch(e=>{console.error(e),v(e)})}catch(o){console.error(o),v(o)}return a},[]),(0,a.jsxs)("main",{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,a.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,a.jsx)("meta",{name:"description",content:e.description}),(0,a.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,a.jsx)("p",{children:e.description}),g?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,a.jsx)("p",{children:"".concat(g)})]}):null]}),(0,a.jsxs)("div",{className:c().canvasContainer,children:[(0,a.jsx)("div",{style:{position:"absolute",left:10},ref:p}),(0,a.jsx)("div",{style:{position:"absolute",right:10},ref:l}),(0,a.jsx)("canvas",{ref:n})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("nav",{className:c().sourceFileNav,children:(0,a.jsx)("ul",{children:r.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.name),"data-active":P==e.name,onClick(){h(e.name)},children:e.name})},n))})}),r.map((e,n)=>(0,a.jsx)(e.Container,{className:c().sourceFileContainer,"data-active":P==e.name},n))]})]})},p=e=>(0,a.jsx)(u,{...e});function f(e,n){if(!e)throw Error(n)}},2752:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var a=t(5671),r="struct VertexOutput {\n  @builtin(position) position : vec4<f32>,\n  @location(4) color : vec4<f32>,\n}\n\n@vertex\nfn vert_main(\n  @location(0) a_particlePos : vec2<f32>,\n  @location(1) a_particleVel : vec2<f32>,\n  @location(2) a_pos : vec2<f32>\n) -> VertexOutput {\n  let angle = -atan2(a_particleVel.x, a_particleVel.y);\n  let pos = vec2(\n    (a_pos.x * cos(angle)) - (a_pos.y * sin(angle)),\n    (a_pos.x * sin(angle)) + (a_pos.y * cos(angle))\n  );\n  \n  var output : VertexOutput;\n  output.position = vec4(pos + a_particlePos, 0.0, 1.0);\n  output.color = vec4(\n    1.0 - sin(angle + 1.0) - a_particleVel.y,\n    pos.x * 100.0 - a_particleVel.y + 0.1,\n    a_particleVel.x + cos(angle + 0.5),\n    1.0);\n  return output;\n}\n\n@fragment\nfn frag_main(@location(4) color : vec4<f32>) -> @location(0) vec4<f32> {\n  return color;\n}",s="struct Particle {\n  pos : vec2<f32>,\n  vel : vec2<f32>,\n}\nstruct SimParams {\n  deltaT : f32,\n  rule1Distance : f32,\n  rule2Distance : f32,\n  rule3Distance : f32,\n  rule1Scale : f32,\n  rule2Scale : f32,\n  rule3Scale : f32,\n}\nstruct Particles {\n  particles : array<Particle>,\n}\n@binding(0) @group(0) var<uniform> params : SimParams;\n@binding(1) @group(0) var<storage, read> particlesA : Particles;\n@binding(2) @group(0) var<storage, read_write> particlesB : Particles;\n\n// https://github.com/austinEng/Project6-Vulkan-Flocking/blob/master/data/shaders/computeparticles/particle.comp\n@compute @workgroup_size(64)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n  var index = GlobalInvocationID.x;\n\n  var vPos = particlesA.particles[index].pos;\n  var vVel = particlesA.particles[index].vel;\n  var cMass = vec2(0.0);\n  var cVel = vec2(0.0);\n  var colVel = vec2(0.0);\n  var cMassCount = 0u;\n  var cVelCount = 0u;\n  var pos : vec2<f32>;\n  var vel : vec2<f32>;\n\n  for (var i = 0u; i < arrayLength(&particlesA.particles); i++) {\n    if (i == index) {\n      continue;\n    }\n\n    pos = particlesA.particles[i].pos.xy;\n    vel = particlesA.particles[i].vel.xy;\n    if (distance(pos, vPos) < params.rule1Distance) {\n      cMass += pos;\n      cMassCount++;\n    }\n    if (distance(pos, vPos) < params.rule2Distance) {\n      colVel -= pos - vPos;\n    }\n    if (distance(pos, vPos) < params.rule3Distance) {\n      cVel += vel;\n      cVelCount++;\n    }\n  }\n  if (cMassCount > 0) {\n    cMass = (cMass / vec2(f32(cMassCount))) - vPos;\n  }\n  if (cVelCount > 0) {\n    cVel /= f32(cVelCount);\n  }\n  vVel += (cMass * params.rule1Scale) + (colVel * params.rule2Scale) + (cVel * params.rule3Scale);\n\n  // clamp velocity for a more pleasing simulation\n  vVel = normalize(vVel) * clamp(length(vVel), 0.0, 0.1);\n  // kinematic update\n  vPos = vPos + (vVel * params.deltaT);\n  // Wrap around boundary\n  if (vPos.x < -1.0) {\n    vPos.x = 1.0;\n  }\n  if (vPos.x > 1.0) {\n    vPos.x = -1.0;\n  }\n  if (vPos.y < -1.0) {\n    vPos.y = 1.0;\n  }\n  if (vPos.y > 1.0) {\n    vPos.y = -1.0;\n  }\n  // Write back\n  particlesB.particles[index].pos = vPos;\n  particlesB.particles[index].vel = vVel;\n}\n",i="src/sample/computeBoids/main.ts";let o=async e=>{let n,t,{canvas:i,pageState:o,gui:l}=e,c=await navigator.gpu.requestAdapter();(0,a.hu)(c,"requestAdapter returned null");let u=c.features.has("timestamp-query"),p=await c.requestDevice({requiredFeatures:u?["timestamp-query"]:[]}),f=document.createElement("div");f.style.color="white",f.style.background="black",f.style.position="absolute",f.style.top="10px",f.style.left="10px",f.style.textAlign="left";let d=document.createElement("pre");if(f.appendChild(d),i.parentNode?i.parentNode.appendChild(f):console.error("canvas.parentNode is null"),!o.active)return;let m=i.getContext("webgpu"),g=window.devicePixelRatio;i.width=i.clientWidth*g,i.height=i.clientHeight*g;let v=navigator.gpu.getPreferredCanvasFormat();m.configure({device:p,format:v,alphaMode:"premultiplied"});let P=p.createShaderModule({code:r}),h=p.createRenderPipeline({layout:"auto",vertex:{module:P,entryPoint:"vert_main",buffers:[{arrayStride:16,stepMode:"instance",attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:8,format:"float32x2"}]},{arrayStride:8,stepMode:"vertex",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:P,entryPoint:"frag_main",targets:[{format:v}]},primitive:{topology:"triangle-list"}}),y=p.createComputePipeline({layout:"auto",compute:{module:p.createShaderModule({code:s}),entryPoint:"main"}}),b={colorAttachments:[{view:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},S={},x=[];u&&(n=p.createQuerySet({type:"timestamp",count:4}),t=p.createBuffer({size:4*BigInt64Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),S.timestampWrites={querySet:n,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},b.timestampWrites={querySet:n,beginningOfPassWriteIndex:2,endOfPassWriteIndex:3});let B=new Float32Array([-.01,-.02,.01,-.02,0,.02]),E=p.createBuffer({size:B.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(E.getMappedRange()).set(B),E.unmap();let D={deltaT:.04,rule1Distance:.1,rule2Distance:.025,rule3Distance:.025,rule1Scale:.02,rule2Scale:.05,rule3Scale:.005},_=7*Float32Array.BYTES_PER_ELEMENT,C=p.createBuffer({size:_,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});function w(){p.queue.writeBuffer(C,0,new Float32Array([D.deltaT,D.rule1Distance,D.rule2Distance,D.rule3Distance,D.rule1Scale,D.rule2Scale,D.rule3Scale]))}w(),Object.keys(D).forEach(e=>{void 0===l?console.error("GUI not initialized"):l.add(D,e).onFinishChange(w)});let M=new Float32Array(6e3);for(let A=0;A<1500;++A)M[4*A+0]=2*(Math.random()-.5),M[4*A+1]=2*(Math.random()-.5),M[4*A+2]=2*(Math.random()-.5)*.1,M[4*A+3]=2*(Math.random()-.5)*.1;let U=[,,],G=[,,];for(let R=0;R<2;++R)U[R]=p.createBuffer({size:M.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE,mappedAtCreation:!0}),new Float32Array(U[R].getMappedRange()).set(M),U[R].unmap();for(let T=0;T<2;++T)G[T]=p.createBindGroup({layout:y.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:C}},{binding:1,resource:{buffer:U[T],offset:0,size:M.byteLength}},{binding:2,resource:{buffer:U[(T+1)%2],offset:0,size:M.byteLength}}]});let V=0,k=0,L=0,F=0;requestAnimationFrame(function e(){let a;if(!o.active)return;b.colorAttachments[0].view=m.getCurrentTexture().createView();let r=p.createCommandEncoder();{let s=r.beginComputePass(S);s.setPipeline(y),s.setBindGroup(0,G[V%2]),s.dispatchWorkgroups(Math.ceil(23.4375)),s.end()}{let i=r.beginRenderPass(b);i.setPipeline(h),i.setVertexBuffer(0,U[(V+1)%2]),i.setVertexBuffer(1,E),i.draw(3,1500,0,0),i.end()}u&&(a=x.pop()||p.createBuffer({size:4*BigInt64Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),r.resolveQuerySet(n,0,4,t,0),r.copyBufferToBuffer(t,0,a,0,a.size)),p.queue.submit([r.finish()]),u&&a.mapAsync(GPUMapMode.READ).then(()=>{let e=new BigInt64Array(a.getMappedRange()),n=Number(e[1]-e[0]),t=Number(e[3]-e[2]);if(n>0&&t>0&&(k+=n,L+=t,F++),a.unmap(),F>=100){let r=Math.round(k/F/1e3),s=Math.round(L/F/1e3);d.textContent="avg compute pass duration: ".concat(r,"\xb5s\navg render pass duration: ").concat(s,"\xb5s\nspare readback buffers: ").concat(x.length),k=0,L=0,F=0}x.push(a)}),++V,requestAnimationFrame(e)})},l=()=>(0,a.Tl)({name:"Compute Boids",description:"A GPU compute particle simulation that mimics the flocking behavior of birds. A compute shader updates two ping-pong buffers which store particle data. The data is used to draw instanced particles.",gui:!0,init:o,sources:[{name:i.substring(24),contents:"import { assert, makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport spriteWGSL from './sprite.wgsl';\nimport updateSpritesWGSL from './updateSprites.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  assert(adapter, 'requestAdapter returned null');\n\n  const hasTimestampQuery = adapter.features.has('timestamp-query');\n  const device = await adapter.requestDevice({\n    requiredFeatures: hasTimestampQuery ? ['timestamp-query'] : [],\n  });\n\n  const perfDisplayContainer = document.createElement('div');\n  perfDisplayContainer.style.color = 'white';\n  perfDisplayContainer.style.background = 'black';\n  perfDisplayContainer.style.position = 'absolute';\n  perfDisplayContainer.style.top = '10px';\n  perfDisplayContainer.style.left = '10px';\n  perfDisplayContainer.style.textAlign = 'left';\n\n  const perfDisplay = document.createElement('pre');\n  perfDisplayContainer.appendChild(perfDisplay);\n  if (canvas.parentNode) {\n    canvas.parentNode.appendChild(perfDisplayContainer);\n  } else {\n    console.error('canvas.parentNode is null');\n  }\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n  const devicePixelRatio = window.devicePixelRatio;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const spriteShaderModule = device.createShaderModule({ code: spriteWGSL });\n  const renderPipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: spriteShaderModule,\n      entryPoint: 'vert_main',\n      buffers: [\n        {\n          // instanced particles buffer\n          arrayStride: 4 * 4,\n          stepMode: 'instance',\n          attributes: [\n            {\n              // instance position\n              shaderLocation: 0,\n              offset: 0,\n              format: 'float32x2',\n            },\n            {\n              // instance velocity\n              shaderLocation: 1,\n              offset: 2 * 4,\n              format: 'float32x2',\n            },\n          ],\n        },\n        {\n          // vertex buffer\n          arrayStride: 2 * 4,\n          stepMode: 'vertex',\n          attributes: [\n            {\n              // vertex positions\n              shaderLocation: 2,\n              offset: 0,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: spriteShaderModule,\n      entryPoint: 'frag_main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const computePipeline = device.createComputePipeline({\n    layout: 'auto',\n    compute: {\n      module: device.createShaderModule({\n        code: updateSpritesWGSL,\n      }),\n      entryPoint: 'main',\n    },\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined as GPUTextureView, // Assigned later\n        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        loadOp: 'clear' as const,\n        storeOp: 'store' as const,\n      },\n    ],\n  };\n\n  const computePassDescriptor: GPUComputePassDescriptor = {};\n\n  /** Storage for timestamp query results */\n  let querySet: GPUQuerySet | undefined = undefined;\n  /** Timestamps are resolved into this buffer */\n  let resolveBuffer: GPUBuffer | undefined = undefined;\n  /** Pool of spare buffers for MAP_READing the timestamps back to CPU. A buffer\n   * is taken from the pool (if available) when a readback is needed, and placed\n   * back into the pool once the readback is done and it's unmapped. */\n  const spareResultBuffers = [];\n\n  if (hasTimestampQuery) {\n    querySet = device.createQuerySet({\n      type: 'timestamp',\n      count: 4,\n    });\n    resolveBuffer = device.createBuffer({\n      size: 4 * BigInt64Array.BYTES_PER_ELEMENT,\n      usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,\n    });\n    computePassDescriptor.timestampWrites = {\n      querySet,\n      beginningOfPassWriteIndex: 0,\n      endOfPassWriteIndex: 1,\n    };\n    renderPassDescriptor.timestampWrites = {\n      querySet,\n      beginningOfPassWriteIndex: 2,\n      endOfPassWriteIndex: 3,\n    };\n  }\n\n  // prettier-ignore\n  const vertexBufferData = new Float32Array([\n    -0.01, -0.02, 0.01,\n    -0.02, 0.0, 0.02,\n  ]);\n\n  const spriteVertexBuffer = device.createBuffer({\n    size: vertexBufferData.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(spriteVertexBuffer.getMappedRange()).set(vertexBufferData);\n  spriteVertexBuffer.unmap();\n\n  const simParams = {\n    deltaT: 0.04,\n    rule1Distance: 0.1,\n    rule2Distance: 0.025,\n    rule3Distance: 0.025,\n    rule1Scale: 0.02,\n    rule2Scale: 0.05,\n    rule3Scale: 0.005,\n  };\n\n  const simParamBufferSize = 7 * Float32Array.BYTES_PER_ELEMENT;\n  const simParamBuffer = device.createBuffer({\n    size: simParamBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  function updateSimParams() {\n    device.queue.writeBuffer(\n      simParamBuffer,\n      0,\n      new Float32Array([\n        simParams.deltaT,\n        simParams.rule1Distance,\n        simParams.rule2Distance,\n        simParams.rule3Distance,\n        simParams.rule1Scale,\n        simParams.rule2Scale,\n        simParams.rule3Scale,\n      ])\n    );\n  }\n\n  updateSimParams();\n  Object.keys(simParams).forEach((k) => {\n    const key = k as keyof typeof simParams;\n    if (gui === undefined) {\n      console.error('GUI not initialized');\n    } else {\n      gui.add(simParams, key).onFinishChange(updateSimParams);\n    }\n  });\n\n  const numParticles = 1500;\n  const initialParticleData = new Float32Array(numParticles * 4);\n  for (let i = 0; i < numParticles; ++i) {\n    initialParticleData[4 * i + 0] = 2 * (Math.random() - 0.5);\n    initialParticleData[4 * i + 1] = 2 * (Math.random() - 0.5);\n    initialParticleData[4 * i + 2] = 2 * (Math.random() - 0.5) * 0.1;\n    initialParticleData[4 * i + 3] = 2 * (Math.random() - 0.5) * 0.1;\n  }\n\n  const particleBuffers: GPUBuffer[] = new Array(2);\n  const particleBindGroups: GPUBindGroup[] = new Array(2);\n  for (let i = 0; i < 2; ++i) {\n    particleBuffers[i] = device.createBuffer({\n      size: initialParticleData.byteLength,\n      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,\n      mappedAtCreation: true,\n    });\n    new Float32Array(particleBuffers[i].getMappedRange()).set(\n      initialParticleData\n    );\n    particleBuffers[i].unmap();\n  }\n\n  for (let i = 0; i < 2; ++i) {\n    particleBindGroups[i] = device.createBindGroup({\n      layout: computePipeline.getBindGroupLayout(0),\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: simParamBuffer,\n          },\n        },\n        {\n          binding: 1,\n          resource: {\n            buffer: particleBuffers[i],\n            offset: 0,\n            size: initialParticleData.byteLength,\n          },\n        },\n        {\n          binding: 2,\n          resource: {\n            buffer: particleBuffers[(i + 1) % 2],\n            offset: 0,\n            size: initialParticleData.byteLength,\n          },\n        },\n      ],\n    });\n  }\n\n  let t = 0;\n  let computePassDurationSum = 0;\n  let renderPassDurationSum = 0;\n  let timerSamples = 0;\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      const passEncoder = commandEncoder.beginComputePass(\n        computePassDescriptor\n      );\n      passEncoder.setPipeline(computePipeline);\n      passEncoder.setBindGroup(0, particleBindGroups[t % 2]);\n      passEncoder.dispatchWorkgroups(Math.ceil(numParticles / 64));\n      passEncoder.end();\n    }\n    {\n      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n      passEncoder.setPipeline(renderPipeline);\n      passEncoder.setVertexBuffer(0, particleBuffers[(t + 1) % 2]);\n      passEncoder.setVertexBuffer(1, spriteVertexBuffer);\n      passEncoder.draw(3, numParticles, 0, 0);\n      passEncoder.end();\n    }\n\n    let resultBuffer: GPUBuffer | undefined = undefined;\n    if (hasTimestampQuery) {\n      resultBuffer =\n        spareResultBuffers.pop() ||\n        device.createBuffer({\n          size: 4 * BigInt64Array.BYTES_PER_ELEMENT,\n          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,\n        });\n      commandEncoder.resolveQuerySet(querySet, 0, 4, resolveBuffer, 0);\n      commandEncoder.copyBufferToBuffer(\n        resolveBuffer,\n        0,\n        resultBuffer,\n        0,\n        resultBuffer.size\n      );\n    }\n\n    device.queue.submit([commandEncoder.finish()]);\n\n    if (hasTimestampQuery) {\n      resultBuffer.mapAsync(GPUMapMode.READ).then(() => {\n        const times = new BigInt64Array(resultBuffer.getMappedRange());\n        const computePassDuration = Number(times[1] - times[0]);\n        const renderPassDuration = Number(times[3] - times[2]);\n\n        // In some cases the timestamps may wrap around and produce a negative\n        // number as the GPU resets it's timings. These can safely be ignored.\n        if (computePassDuration > 0 && renderPassDuration > 0) {\n          computePassDurationSum += computePassDuration;\n          renderPassDurationSum += renderPassDuration;\n          timerSamples++;\n        }\n        resultBuffer.unmap();\n\n        // Periodically update the text for the timer stats\n        const kNumTimerSamplesPerUpdate = 100;\n        if (timerSamples >= kNumTimerSamplesPerUpdate) {\n          const avgComputeMicroseconds = Math.round(\n            computePassDurationSum / timerSamples / 1000\n          );\n          const avgRenderMicroseconds = Math.round(\n            renderPassDurationSum / timerSamples / 1000\n          );\n          perfDisplay.textContent = `\\\navg compute pass duration: ${avgComputeMicroseconds}\xb5s\navg render pass duration: ${avgRenderMicroseconds}\xb5s\nspare readback buffers: ${spareResultBuffers.length}`;\n          computePassDurationSum = 0;\n          renderPassDurationSum = 0;\n          timerSamples = 0;\n        }\n        spareResultBuffers.push(resultBuffer);\n      });\n    }\n\n    ++t;\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst ComputeBoids: () => JSX.Element = () =>\n  makeSample({\n    name: 'Compute Boids',\n    description:\n      'A GPU compute particle simulation that mimics \\\nthe flocking behavior of birds. A compute shader updates \\\ntwo ping-pong buffers which store particle data. The data \\\nis used to draw instanced particles.',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: 'updateSprites.wgsl',\n        contents: updateSpritesWGSL,\n        editable: true,\n      },\n      {\n        name: 'sprite.wgsl',\n        contents: spriteWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ComputeBoids;\n"},{name:"updateSprites.wgsl",contents:s,editable:!0},{name:"sprite.wgsl",contents:r,editable:!0}],filename:i});var c=l},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}}}]);