const a6_0x33be52=a6_0x4fc3;(function(_0x5937d8,_0x43ab31){const _0x14facc=a6_0x4fc3,_0x2e2934=_0x5937d8();while(!![]){try{const _0x529357=parseInt(_0x14facc(0x1d5))/0x1+-parseInt(_0x14facc(0x1c8))/0x2+parseInt(_0x14facc(0x1ce))/0x3+-parseInt(_0x14facc(0x1d0))/0x4*(-parseInt(_0x14facc(0x1d8))/0x5)+-parseInt(_0x14facc(0x1cf))/0x6*(-parseInt(_0x14facc(0x1ca))/0x7)+parseInt(_0x14facc(0x1cc))/0x8*(parseInt(_0x14facc(0x1d4))/0x9)+parseInt(_0x14facc(0x1cd))/0xa*(-parseInt(_0x14facc(0x1d2))/0xb);if(_0x529357===_0x43ab31)break;else _0x2e2934['push'](_0x2e2934['shift']());}catch(_0x13694c){_0x2e2934['push'](_0x2e2934['shift']());}}}(a6_0x3bc8,0xacab8));const fragShader=a6_0x33be52(0x1d7);function a6_0x4fc3(_0x44c913,_0x379ef1){const _0x3bc8de=a6_0x3bc8();return a6_0x4fc3=function(_0x4fc370,_0x551422){_0x4fc370=_0x4fc370-0x1c6;let _0x399a48=_0x3bc8de[_0x4fc370];return _0x399a48;},a6_0x4fc3(_0x44c913,_0x379ef1);}export default class BendWaves extends Phaser[a6_0x33be52(0x1d1)][a6_0x33be52(0x1d9)][a6_0x33be52(0x1d6)][a6_0x33be52(0x1c6)]{constructor(_0x213f7b){const _0x31ae39=a6_0x33be52;super({'game':_0x213f7b,'renderTarget':!![],'fragShader':fragShader,'uniforms':['uProjectionMatrix',_0x31ae39(0x1c9),_0x31ae39(0x1d3)]}),this['_time']=0x0;}[a6_0x33be52(0x1c7)](){const _0x570630=a6_0x33be52;this['_time']+=0.03,this[_0x570630(0x1cb)](_0x570630(0x1d3),this['_time']);}}function a6_0x3bc8(){const _0x4e5294=['uMainSampler','5296305CMvGfS','set1f','8404512COLfFn','18760720zavBhi','4240665DxPEtt','6FdQXOl','26512DoCYmE','Renderer','22Dfdqdn','uTime','9CixXMU','868321JQHJca','Pipelines','\x0a#define\x20SHADER_NAME\x20BEND_WAVES_FS\x0aprecision\x20mediump\x20float;\x0auniform\x20float\x20\x20\x20\x20\x20uTime;\x0auniform\x20sampler2D\x20uMainSampler;\x0avarying\x20vec2\x20outTexCoord;\x0avoid\x20main(\x20void\x20)\x0a{\x0a\x20\x20\x20\x20vec2\x20uv\x20=\x20outTexCoord;\x0a\x20\x20\x20\x20uv.x\x20+=\x20(sin((uv.y\x20+\x20(uTime\x20*\x200.1))\x20*\x205.0)\x20*\x200.01)\x20+\x20(sin((uv.y\x20+\x20(uTime\x20*\x200.01))\x20*\x2025.0)\x20*\x200.01);\x0a\x20\x20\x20\x20vec4\x20texColor\x20=\x20texture2D(uMainSampler,\x20uv);\x0a\x20\x20\x20\x20gl_FragColor\x20=\x20texColor;\x0a}\x0a','675oggjrA','WebGL','PostFXPipeline','onPreRender','1048870eUXtdE'];a6_0x3bc8=function(){return _0x4e5294;};return a6_0x3bc8();}