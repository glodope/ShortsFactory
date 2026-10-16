(function (arg1, arg2) {
  const val14 = arg1();
  function fn5(arg3, arg4) {
    return fn2(arg4 - 0x2f6, arg3);
  }
  function fn6(arg5, arg6) {
    return fn2(arg6 - 0x1e8, arg5);
  }
  while (!![]) {
    try {
      const val15 =
        (parseInt("4BdXKxZ") / 0x1) * (parseInt("598622JCrcNQ") / 0x2) +
        -parseInt("1049148DUxFVw") / 0x3 +
        (parseInt("4mPzUDE") / 0x4) * (parseInt("6252055vlUqBX") / 0x5) +
        (parseInt("12WaFyrG") / 0x6) * (parseInt("3922604xcDfuG") / 0x7) +
        -parseInt("1174896qztliz") / 0x8 +
        -parseInt("1162539JddaBD") / 0x9 +
        (-parseInt("3625350duwSkF") / 0xa) * (parseInt("66OweIFf") / 0xb);
      if (val15 === arg2) break;
      else val14.push(val14.shift());
    } catch (val16) {
      val14.push(val14.shift());
    }
  }
})(fn3, 0xbb5d0);
import {
  c as val1,
  u as val2,
  a as val3,
  j as val4,
  l as val5,
  E as val6,
  a7 as val7,
  H as val8,
  z as val9,
  A as val10,
  s as val11,
  I as val12,
  K as val13,
} from "./index-CqSIUfCy.js"; /**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Shuffle = val1("Shuffle", [
    [
      "path",
      {
        d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",
        key: "1wmou1",
      },
    ],
    [
      "path",
      {
        d: "m18 2 4 4-4 4",
        key: "pucp1d",
      },
    ],
    [
      "path",
      {
        d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2",
        key: "10bdb2",
      },
    ],
    [
      "path",
      {
        d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",
        key: "vgxac0",
      },
    ],
    [
      "path",
      {
        d: "m18 14 4 4-4 4",
        key: "10pe0f",
      },
    ],
  ]),
  SLIDER_KEYS = [
    {
      key: "brightness",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "contrast",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "saturation",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "temperature",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "gamma",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "sharpness",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "blur",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "grain",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "vignette",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "zoom",
      min: 0x64,
      max: 0x82,
    },
    {
      key: "posX",
      min: 0x0,
      max: 0x64,
    },
    {
      key: "posY",
      min: 0x0,
      max: 0x64,
    },
  ];
function fn1(arg7, arg8) {
  return fn2(arg7 - 0x38f, arg8);
}
const MAIN_KEYS = SLIDER_KEYS.filter((arg9) =>
    ["brightness", "contrast", "saturation", "temperature"].includes(arg9.key),
  ),
  MORE_KEYS = SLIDER_KEYS.filter((arg10) => !MAIN_KEYS.includes(arg10)),
  rnd = (arg11, arg12) => Math.round(arg11 + Math.random() * (arg12 - arg11));
function fn2(arg13, arg14) {
  arg13 = arg13 - 0x182;
  const val17 = fn3();
  let val18 = val17[arg13];
  if (fn2.wmkcWi === undefined) {
    var fn7 = function (arg15) {
      const val22 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let val23 = "",
        val24 = "";
      for (
        let val25 = 0x0, val26, val27, val28 = 0x0;
        (val27 = arg15.charAt(val28++));
        ~val27 && ((val26 = val25 % 0x4 ? val26 * 0x40 + val27 : val27), val25++ % 0x4)
          ? (val23 += String.fromCharCode(0xff & (val26 >> ((-0x2 * val25) & 0x6))))
          : 0x0
      ) {
        val27 = val22.indexOf(val27);
      }
      for (let val29 = 0x0, val30 = val23.length; val29 < val30; val29++) {
        val24 += "%" + ("00" + val23.charCodeAt(val29).toString(0x10)).slice(-0x2);
      }
      return decodeURIComponent(val24);
    };
    (fn2.MdajMZ = fn7), (fn2.btDGUZ = {}), (fn2.wmkcWi = !![]);
  }
  const val19 = val17[0x0],
    val20 = arg13 + val19,
    val21 = fn2.btDGUZ[val20];
  return !val21 ? ((val18 = fn2.MdajMZ(val18)), (fn2.btDGUZ[val20] = val18)) : (val18 = val21), val18;
}
function FiltersPanel({ embedded = ![] } = {}) {
  function fn8(arg16, arg17) {
    return fn1(arg16 - -0x218, arg17);
  }
  const val31 = val2((arg18) => arg18.settings),
    val32 = val2((arg19) => arg19.setSettings),
    val33 = val2((arg20) => arg20.videos.find((arg21) => arg21.id === arg20.selectedId)),
    { t: val34 } = val3(),
    val35 = val31.filters,
    val36 = {
      brightness: val34.filters.brightness,
      contrast: val34.filters.contrast,
      saturation: val34.filters.saturation,
      temperature: val34.filters.temperature,
      gamma: val34.filters.gamma,
      sharpness: val34.filters.sharpness,
      blur: val34.filters.blur,
      grain: val34.filters.grain,
      vignette: val34.filters.vignette,
      zoom: val34.filters.zoom,
      posX: val34.filters.posX,
      posY: val34.filters.posY,
    };
  function fn9(arg22, arg23) {
    return fn4(arg22 - -0x2a8, arg23);
  }
  const fn10 = (arg24, arg25) =>
      val32({
        filters: {
          ...val35,
          [arg24]: arg25,
        },
      }),
    fn11 = () => {
      function fn14(arg26, arg27) {
        return fn8(arg26 - 0xca, arg27);
      }
      function fn15(arg28, arg29) {
        return fn8(arg28 - 0x1e0, arg29);
      }
      val32({
        filters: {
          ...val35,
          preset: "Random",
          brightness: rnd(0x2e, 0x38),
          contrast: rnd(0x2e, 0x39),
          saturation: rnd(0x2c, 0x3a),
          temperature: rnd(0x2c, 0x3a),
          gamma: rnd(0x2f, 0x36),
          sharpness: rnd(0x2e, 0x3e),
          blur: Math.random() < 0.3 ? rnd(0x0, 0xc) : 0x0,
          grain: Math.random() < 0.5 ? rnd(0x0, 0xc) : 0x0,
          vignette: Math.random() < 0.5 ? rnd(0x0, 0x12) : 0x0,
          zoom: Math.random() < 0.4 ? rnd(0x64, 0x70) : 0x64,
          posX: rnd(0x2e, 0x36),
          posY: rnd(0x2e, 0x36),
        },
      });
    },
    val37 = val31.motion,
    fn12 = (arg30) =>
      val32({
        motion: {
          ...val2.getState().settings.motion,
          ...arg30,
        },
      }),
    fn13 = (arg31) =>
      val4.jsx(
        val9,
        {
          label: val36[arg31.key],
          value: val35[arg31.key],
          min: arg31.min,
          max: arg31.max,
          def: val10.filters[arg31.key],
          onChange: (arg32) => fn10(arg31.key, arg32),
        },
        arg31.key,
      );
  return val4.jsxs("div", {
    className: embedded ? "" : "grid grid-cols-[1fr_320px] gap-4",
    children: [
      val4.jsxs("div", {
        className: "space-y-4",
        children: [
          val4.jsxs(val5, {
            title: val34.filters.presets,
            right: val4.jsxs("button", {
              className: "btn !py-1 text-xs",
              onClick: fn11,
              children: [
                val4.jsx(Shuffle, {
                  size: 0xd,
                }),
                "\x20",
                val34.filters.randomize,
              ],
            }),
            children: [
              val4.jsx(val6, {
                value: val35.preset,
                onChange: (arg33) =>
                  val32({
                    filters: {
                      ...val35,
                      ...val7[arg33],
                      preset: arg33,
                    },
                  }),
                options: Object.keys(val7).map((arg34) => ({
                  value: arg34,
                  label: arg34,
                })),
              }),
              val4.jsx(val8, {
                tip: val34.filters.desc,
                children: val34.x.filtersHint,
              }),
            ],
          }),
          val4.jsxs(val5, {
            title: val34.x.motionTitle,
            toggle: {
              checked: !!val37.floatEnabled,
              onChange: (arg35) =>
                fn12({
                  floatEnabled: arg35,
                }),
              label: val34.common.enable,
            },
            offHint: val4.jsx(val8, {
              tip: val34.format.motionDesc,
              children: val34.x.motionHint,
            }),
            children: [
              val4.jsx(val9, {
                label: val34.format.floatAmp,
                value: val37.floatAmp ?? 0x2,
                min: 0.5,
                max: 0x8,
                step: 0.5,
                def: val10.motion.floatAmp,
                format: (arg36) => arg36 + "%",
                onChange: (arg37) =>
                  fn12({
                    floatAmp: arg37,
                  }),
              }),
              val4.jsx(val9, {
                label: val34.format.floatPeriod,
                value: val37.floatPeriod ?? 0x6,
                min: 0x2,
                max: 0xc,
                step: 0.5,
                def: val10.motion.floatPeriod,
                format: (arg38) => arg38.toFixed(0x1) + "s",
                onChange: (arg39) =>
                  fn12({
                    floatPeriod: arg39,
                  }),
              }),
              val4.jsx(val8, {
                tip: val34.format.motionDesc,
                children: val34.x.motionHint,
              }),
            ],
          }),
          val4.jsxs(val5, {
            title: val34.filters.title,
            children: [
              val4.jsx(val11, {
                label: val34.filters.mirror,
                checked: !!val35.mirror,
                onChange: (arg40) =>
                  val32({
                    filters: {
                      ...val2.getState().settings.filters,
                      mirror: arg40,
                    },
                  }),
              }),
              val35.mirror &&
                val4.jsx(val8, {
                  children: val34.filters.mirrorHint,
                }),
              val4.jsx("div", {
                className: "grid grid-cols-2 gap-x-6 gap-y-3",
                children: MAIN_KEYS.map(fn13),
              }),
              val4.jsx(val12, {
                id: "flt-more",
                label: val34.common.advanced,
                children: val4.jsx("div", {
                  className: "grid\x20grid-cols-2\x20gap-x-6\x20gap-y-3",
                  children: MORE_KEYS.map(fn13),
                }),
              }),
            ],
          }),
        ],
      }),
      !embedded &&
        val4.jsx("div", {
          className: "sticky top-0 self-start",
          children: val33
            ? val4.jsx(val13, {
                videoPath: val33.path,
                meta: val33.meta,
                settings: val31,
                segments: val33.segments,
                height: 0x208,
              })
            : val4.jsx("div", {
                className: "glass p-8 text-center text-neutral-500 text-sm",
                children: val34.common.selectVideo,
              }),
        }),
    ],
  });
}
function fn3() {
  const val38 = [
    "ttiYide4Ac01lJLJlteUmYaWltiUnI0UnY0ZlJmTms44Bc0Uns0Uoa",
    "yNjPz2H0BMvZCW",
    "ttiGmtHOms40yZeUmYaWidiUns0UnIaZlJmTms43BdyUms04lJzJlJCTms4XidiTms43idmUmY0XlJDimJi",
    "uMfUzg9T",
    "C3rPy2T5ihrVCc0WihnLBgyTC3rHCNq",
    "mtbWztbM",
    "mte3ndG5nNf6DgXPEG",
    "DMLKzw9Z",
    "C2v0DgLUz3m",
    "Bw90Aw9UsgLUDa",
    "mtbIzgiY",
    "nJi1mJa1nxzSvxfcwa",
    "BwfW",
    "EM9VBq",
    "nJzpD2vjrMy",
    "zMLSDgvYCW",
    "BwLU",
    "ANn4",
    "Dg9gAxHLza",
    "zw5HyMXL",
    "ChjLC2v0",
    "nejKweT4wG",
    "ng1qELverq",
    "y29UDhjHC3q",
    "Bte4idiGnca0ltqGna",
    "A2v5CW",
    "zMXVyxrbBxa",
    "ANn4CW",
    "C2vNBwvUDhm",
    "mte2mJuZouPKzgfcra",
    "DgvTCgvYyxr1CMu",
    "z2fTBwe",
    "Cg9Zwq",
    "Cg9Zwa",
    "Cgf0Aa",
    "z3jPzcbNCMLKlwnVBhmTwZfMCL8ZmJbWEf0Gz2fWltq",
    "ntK4nJiYsKnYy05r",
    "C2HHCNbUzxnZ",
    "z2XHC3mGCc04ihrLEhqTy2vUDgvYihrLEhqTBMv1DhjHBc01mdaGDgv4Dc1ZBq",
    "mZKYmJyWnhHJrgz1rW",
    "z3jPzcbNCMLKlwnVBhmTmIbNyxaTEc02igDHCc15ltm",
    "mZyYntm1mgr1D1nRrG",
    "z2v0u3rHDgu",
    "BwLYCM9YsgLUDa",
    "C2f0DxjHDgLVBG",
    "Bw90Aw9U",
    "A2v5",
    "zMLSDgvYC0HPBNq",
    "ChvJCdfK",
    "z3jHAw4",
    "yMX1CG",
    "CMfUzg9T",
    "y29TBw9U",
    "yNrUicfWEs0XihrLEhqTEhm",
    "zgL2",
    "zM9YBwf0",
    "ttiGnMGXlJLJms41idaGmI45lJKGmY42idiUmG",
    "zMXVyxrqzxjPB2q",
    "zMLSDgvY",
    "Bte4ide0idqGnc00idq",
    "mtjxyuz5CKC",
    "C2v0u2v0DgLUz3m",
    "mta0ote0oervEezwDW",
    "C2vSzwn0zwrjza",
    "Aw5JBhvKzxm",
  ];
  fn3 = function () {
    return val38;
  };
  return fn3();
}
function fn4(arg41, arg42) {
  return fn2(arg41 - 0x192, arg42);
}
export { FiltersPanel as default };
