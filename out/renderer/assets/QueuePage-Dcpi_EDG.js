(function (arg1, arg2) {
  const val20 = arg1();
  function fn5(arg3, arg4) {
    return fn3(arg3 - -0x1e2, arg4);
  }
  function fn6(arg5, arg6) {
    return fn3(arg5 - -0x24c, arg6);
  }
  while (!![]) {
    try {
      const val21 =
        (-parseInt("60233kHgsRk") / 0x1) * (parseInt("12GOQuhM") / 0x2) +
        (-parseInt("192UNhCQY") / 0x3) * (parseInt("11672eHhsQj") / 0x4) +
        -parseInt("4123650hFfTcZ") / 0x5 +
        (parseInt("36636aEMXKn") / 0x6) * (-parseInt("497wwdYcb") / 0x7) +
        (parseInt("1064hnjMvw") / 0x8) * (parseInt("40284CNyJmA") / 0x9) +
        (parseInt("10cutJDE") / 0xa) * (parseInt("3948978AlaOLY") / 0xb) +
        parseInt("15292284tlgYJO") / 0xc;
      if (val21 === arg2) break;
      else val20.push(val20.shift());
    } catch (val22) {
      val20.push(val20.shift());
    }
  }
})(fn4, 0x67171);
import {
  c as val1,
  u as val2,
  a as val3,
  r as val4,
  R as val5,
  j as val6,
  L as val7,
  f as val8,
  P as val9,
  b as val10,
  d as val11,
  e as val12,
  F as val13,
  C as val14,
  M as val15,
  g as val16,
  T as val17,
  S as val18,
  X,
  h as val19,
} from "./index-CqSIUfCy.js";
function fn1(arg7, arg8) {
  return fn3(arg8 - 0x1fa, arg7);
} /**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronRight = val1("ChevronRight", [
    [
      "path",
      {
        d: "m9\x2018\x206-6-6-6",
        key: "mthhwq",
      },
    ],
  ]),
  CircleX = val1("CircleX", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "path",
      {
        d: "m15 9-6 6",
        key: "1uzhvr",
      },
    ],
    [
      "path",
      {
        d: "m9 9 6 6",
        key: "z0biqf",
      },
    ],
  ]),
  ClipboardCopy = val1("ClipboardCopy", [
    [
      "rect",
      {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6",
      },
    ],
    [
      "path",
      {
        d: "M8\x204H6a2\x202\x200\x200\x200-2\x202v14a2\x202\x200\x200\x200\x202\x202h12a2\x202\x200\x200\x200\x202-2v-2",
        key: "4jdomd",
      },
    ],
    [
      "path",
      {
        d: "M16\x204h2a2\x202\x200\x200\x201\x202\x202v4",
        key: "3hqy98",
      },
    ],
    [
      "path",
      {
        d: "M21 14H11",
        key: "1bme5i",
      },
    ],
    [
      "path",
      {
        d: "m15 10-4 4 4 4",
        key: "5dvupr",
      },
    ],
  ]);
function fn2(arg9, arg10) {
  return fn3(arg10 - 0x3e2, arg9);
} /**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock = val1("Clock", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "polyline",
      {
        points: "12\x206\x2012\x2012\x2016\x2014",
        key: "68esgv",
      },
    ],
  ]),
  FileVideo = val1("FileVideo", [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    [
      "path",
      {
        d: "M14\x202v4a2\x202\x200\x200\x200\x202\x202h4",
        key: "tnqrlb",
      },
    ],
    [
      "path",
      {
        d: "m10\x2011\x205\x203-5\x203v-6Z",
        key: "7ntvm4",
      },
    ],
  ]),
  STATUS_ICON = {
    waiting: val6.jsx(Clock, {
      size: 0xe,
      className: "text-neutral-500",
    }),
    processing: val6.jsx(val16, {
      size: 0xe,
      className: "text-accent animate-spin",
    }),
    done: val6.jsx(val19, {
      size: 0xe,
      className: "text-emerald-400",
    }),
    error: val6.jsx(val17, {
      size: 0xe,
      className: "text-red-400",
    }),
  },
  mb = (arg11, arg12) => (arg11 / 0x400 / 0x400).toFixed(arg11 > 0x64 * 0x400 * 0x400 ? 0x0 : 0x1) + "\x20" + arg12,
  PartRow = val5.memo(function PartRow2({
    p: arg13,
    index: arg14,
    t: arg15,
    open: arg16,
    onToggle: arg17,
    paused: arg18,
  }) {
    const val23 = arg18 && arg13.status === "processing";
    function fn7(arg19, arg20) {
      return fn2(arg19, arg20 - -0x2);
    }
    const val24 = arg13.status === "error" && arg13.error === "cancelled",
      val25 = val24
        ? arg15.queue.cancelledSt
        : {
            waiting: arg15.queue.waiting,
            processing: arg15.queue.processingSt,
            done: arg15.queue.doneSt,
            error: arg15.queue.errorSt,
          }[arg13.status],
      val26 = arg13.outSec && arg13.renderSec ? arg13.outSec / arg13.renderSec : 0x0;
    function fn8(arg21, arg22) {
      return fn2(arg21, arg22 - -0x26d);
    }
    return val6.jsxs("div", {
      className: "queue-row queue-row-" + (val24 ? "cancelled" : arg13.status),
      children: [
        val6.jsxs("div", {
          className: "queue-row-main",
          children: [
            val24
              ? val6.jsx(CircleX, {
                  size: 0xe,
                  className: "text-neutral-500",
                })
              : val23
                ? val6.jsx(val9, {
                    size: 0xe,
                    className: "text-amber-400",
                  })
                : STATUS_ICON[arg13.status],
            arg13.status === "done" && arg13.outPath
              ? val6.jsx("button", {
                  className: "queue-thumb",
                  title: arg15.export.openFile,
                  onClick: () => val10.openPath(arg13.outPath),
                  children: val6.jsx(val15, {
                    path: arg13.outPath,
                  }),
                })
              : null,
            val6.jsxs("span", {
              className: "queue-num",
              children: ["#", String(arg13.partIndex + 0x1).padStart(0x2, "0")],
            }),
            val6.jsxs("span", {
              className: "queue-range",
              children: [val8(arg13.startSec), "\x20→\x20", val8(arg13.endSec)],
            }),
            val6.jsx("div", {
              className: "queue-bar",
              children: val6.jsx("div", {
                style: {
                  width: (arg13.status === "done" ? 0x1 : arg13.progress) * 0x64 + "%",
                },
              }),
            }),
            val6.jsx("span", {
              className: "queue-status",
              children:
                arg13.status === "processing"
                  ? "" + (val23 ? arg15.queue.pause + " · " : "") + Math.round(arg13.progress * 0x64) + "%"
                  : val25,
            }),
            val6.jsxs("span", {
              className: "queue-facts",
              children: [
                arg13.status === "done" && arg13.sizeBytes
                  ? val6.jsx("span", {
                      title: arg15.x.size,
                      children: mb(arg13.sizeBytes, arg15.x.mb),
                    })
                  : null,
                arg13.status === "done" && arg13.outSec
                  ? val6.jsx("span", {
                      children: val8(arg13.outSec),
                    })
                  : null,
                arg13.status === "done" && val26 > 0x0
                  ? val6.jsxs("span", {
                      title: arg15.x.speed,
                      children: [val26.toFixed(0x1), "×"],
                    })
                  : null,
              ],
            }),
            arg13.tg &&
              val6.jsx("span", {
                className: "queue-tg queue-tg-" + (arg13.tg === "sent" && arg13.tgWarning ? "warn" : arg13.tg),
                title:
                  arg13.tg === "sending"
                    ? arg15.x.tgSending
                    : arg13.tg === "sent"
                      ? arg13.tgWarning
                        ? arg15.x.tgSent + " ⚠ " + arg13.tgWarning
                        : arg15.x.tgSent
                      : arg15.x.tgError + ":\x20" + (arg13.tgError || ""),
                children:
                  arg13.tg === "sending"
                    ? val6.jsx(val16, {
                        size: 0xc,
                        className: "animate-spin",
                      })
                    : arg13.tg === "sent" && arg13.tgWarning
                      ? val6.jsx(val17, {
                          size: 0xc,
                        })
                      : val6.jsx(val18, {
                          size: 0xc,
                        }),
              }),
            val6.jsxs("span", {
              className: "queue-actions",
              children: [
                arg13.status === "done" &&
                  arg13.outPath &&
                  val6.jsxs(val6.Fragment, {
                    children: [
                      val6.jsx("button", {
                        title: arg15.export.openFile,
                        onClick: () => val10.openPath(arg13.outPath),
                        children: val6.jsx(FileVideo, {
                          size: 0xd,
                        }),
                      }),
                      val6.jsx("button", {
                        title: arg15.export.openFolder,
                        onClick: () => val10.showItemInFolder(arg13.outPath),
                        children: val6.jsx(val13, {
                          size: 0xd,
                        }),
                      }),
                      arg13.description &&
                        val6.jsx("button", {
                          title: arg15.describe.copy,
                          onClick: () => {
                            function fn9(arg23, arg24) {
                              return fn7(arg24, arg23 - -0x20e);
                            }
                            function fn10(arg25, arg26) {
                              return fn8(arg25, arg26 - -0x3ef);
                            }
                            navigator.clipboard
                              .writeText(arg13.description)
                              .then(() => val2.getState().toast(arg15.describe.copied, "ok"))
                              .catch(() => {});
                          },
                          children: val6.jsx(ClipboardCopy, {
                            size: 0xd,
                          }),
                        }),
                    ],
                  }),
                (arg13.status === "error" || arg13.status === "done") &&
                  val6.jsx("button", {
                    title: arg15.x.retryPart,
                    onClick: () => val10.queueRetryPart(arg14),
                    children: val6.jsx(val12, {
                      size: 0xd,
                    }),
                  }),
                (arg13.status === "waiting" || arg13.status === "processing") &&
                  val6.jsx("button", {
                    className: "queue-act-danger",
                    title: arg15.x.cancelPart,
                    onClick: () => val10.queueCancelPart(arg14),
                    children: val6.jsx(X, {
                      size: 0xd,
                    }),
                  }),
              ],
            }),
          ],
        }),
        arg13.error &&
          !val24 &&
          val6.jsxs("button", {
            className: "queue-error",
            onClick: () => arg17(arg14),
            title: arg15.export.errFull,
            children: [
              arg16
                ? val6.jsx(val14, {
                    size: 0xb,
                  })
                : val6.jsx(ChevronRight, {
                    size: 0xb,
                  }),
              val6.jsx("span", {
                children: arg13.error.split("\x0a")[0x0],
              }),
            ],
          }),
        arg13.error &&
          arg16 &&
          !val24 &&
          val6.jsx("pre", {
            className: "queue-error-full",
            children: arg13.error,
          }),
      ],
    });
  });
function QueuePage() {
  const val27 = val2((arg27) => arg27.queue),
    val28 = val2((arg28) => arg28.settings.export.renderConcurrency),
    val29 = val2((arg29) => arg29.setPage),
    val30 = val2((arg30) => arg30.shortsMade),
    { t: val31 } = val3();
  function fn11(arg31, arg32) {
    return fn2(arg32, arg31 - -0x59a);
  }
  const [val32, val33] = val4.useState(null),
    [val34, val35] = val4.useState({}),
    val36 = val5.useCallback((arg33) => val33((arg34) => (arg34 === arg33 ? null : arg33)), []),
    val37 = val27.total
      ? val27.parts.reduce(
          (arg35, arg36) =>
            arg35 + (arg36.status === "done" ? 0x1 : arg36.status === "processing" ? arg36.progress : 0x0),
          0x0,
        ) / val27.total
      : 0x0,
    val38 = val27.parts.find((arg37) => arg37.status === "done" && arg37.outPath)?.["outPath"],
    val39 = val4.useMemo(() => {
      const val41 = new Map();
      function fn13(arg38, arg39) {
        return fn11(arg38 - 0x62, arg39);
      }
      function fn14(arg40, arg41) {
        return fn11(arg41 - -0x14f, arg40);
      }
      return (
        val27.parts.forEach((arg42, arg43) => {
          function fn15(arg44, arg45) {
            return fn13(arg44 - -0x27a, arg45);
          }
          let val42 = val41.get(arg42.videoId);
          if (!val42)
            val41.set(
              arg42.videoId,
              (val42 = {
                name: arg42.videoName,
                rows: [],
              }),
            );
          function fn16(arg46, arg47) {
            return fn13(arg47 - 0x24b, arg46);
          }
          val42.rows.push({
            p: arg42,
            index: arg43,
          });
        }),
        [...val41.entries()]
      );
    }, [val27.parts]),
    val40 = val4.useMemo(() => {
      const val43 = val27.parts.filter((arg48) => arg48.status === "done" && arg48.renderSec && arg48.renderSec > 0x0),
        val44 = Math.max(0x1, val28 || 0x2);
      let val45 = val43.length
        ? val43.reduce((arg49, arg50) => arg49 + (arg50.renderSec || 0x0), 0x0) / val43.length
        : 0x0;
      if (!val45) {
        const val52 = val27.parts.filter(
            (arg51) => arg51.status === "processing" && arg51.startedAt && arg51.progress > 0.04,
          ),
          val53 = val52.sort((arg52, arg53) => arg53.progress - arg52.progress)[0x0];
        if (val53) val45 = (Date.now() - val53.startedAt) / 0x3e8 / val53.progress;
      }
      const val46 = val27.parts.reduce(
        (arg54, arg55) =>
          arg54 + (arg55.status === "waiting" ? 0x1 : arg55.status === "processing" ? 0x1 - arg55.progress : 0x0),
        0x0,
      );
      function fn17(arg56, arg57) {
        return fn11(arg57 - 0x271, arg56);
      }
      function fn18(arg58, arg59) {
        return fn12(arg58, arg59 - 0x45e);
      }
      const val47 = Math.max(
          0x1,
          Math.min(
            val44,
            val27.parts.filter((arg60) => arg60.status === "processing" || arg60.status === "waiting").length,
          ),
        ),
        val48 = val27.running && val45 ? (val46 * val45) / val47 : 0x0,
        val49 = val43.reduce((arg61, arg62) => arg61 + (arg62.outSec || 0x0), 0x0),
        val50 = val43.reduce((arg63, arg64) => arg63 + (arg64.outSec ? arg64.renderSec || 0x0 : 0x0), 0x0),
        val51 = val27.parts.reduce(
          (arg65, arg66) => arg65 + (arg66.status === "done" ? arg66.sizeBytes || 0x0 : 0x0),
          0x0,
        );
      return {
        eta: val48,
        speed: val50 ? val49 / val50 : 0x0,
        bytes: val51,
      };
    }, [val27.parts, val27.running, val28]);
  if (!val27.parts.length)
    return val6.jsx("div", {
      className: "page\x20page-enter",
      children: val6.jsxs("div", {
        className: "empty-hero",
        children: [
          val6.jsx("div", {
            className: "empty-hero-icon",
            children: val6.jsx(val7, {
              size: 0x1e,
            }),
          }),
          val6.jsx("div", {
            className: "empty-hero-title",
            children: val31.queue.emptyTitle,
          }),
          val6.jsx("p", {
            children: val31.queue.empty,
          }),
          val6.jsx("div", {
            className: "flex\x20gap-2\x20justify-center\x20flex-wrap",
            children: val6.jsx("button", {
              className: "btn-primary",
              onClick: () => val29("dashboard"),
              children: val31.nav.dashboard,
            }),
          }),
        ],
      }),
    });
  function fn12(arg67, arg68) {
    return fn2(arg67, arg68 - -0x54a);
  }
  return val6.jsxs("div", {
    className: "page",
    children: [
      val6.jsxs("div", {
        className: "page-card\x20queue-summary",
        children: [
          val6.jsxs("div", {
            className: "queue-summary-top",
            children: [
              val6.jsxs("div", {
                className: "min-w-0",
                children: [
                  val6.jsx("div", {
                    className: "page-title",
                    children: val27.running
                      ? val27.paused
                        ? val31.queue.pause
                        : val31.export.processing
                      : val27.failed || val27.cancelled
                        ? val31.queue.title
                        : val31.queue.allDone,
                  }),
                  val6.jsx("div", {
                    className: "page-sub truncate",
                    children: val27.currentLabel ? val31.queue.current + ":\x20" + val27.currentLabel : "\x20",
                  }),
                ],
              }),
              val6.jsxs("div", {
                className: "queue-kpis",
                children: [
                  val6.jsxs("div", {
                    children: [
                      val6.jsxs("b", {
                        children: [
                          val27.done,
                          val6.jsxs("i", {
                            children: [" / ", val27.total],
                          }),
                        ],
                      }),
                      val6.jsx("span", {
                        children: val31.queue.done,
                      }),
                    ],
                  }),
                  val27.failed > 0x0 &&
                    val6.jsxs("div", {
                      className: "kpi-bad",
                      children: [
                        val6.jsx("b", {
                          children: val27.failed,
                        }),
                        val6.jsx("span", {
                          children: val31.queue.failed,
                        }),
                      ],
                    }),
                  val40.eta > 0x0 &&
                    val6.jsxs("div", {
                      children: [
                        val6.jsx("b", {
                          children: val8(val40.eta),
                        }),
                        val6.jsx("span", {
                          children: val31.x.etaShort,
                        }),
                      ],
                    }),
                  val40.speed > 0x0 &&
                    val6.jsxs("div", {
                      children: [
                        val6.jsxs("b", {
                          children: [val40.speed.toFixed(0x1), "×"],
                        }),
                        val6.jsx("span", {
                          children: val31.x.speed,
                        }),
                      ],
                    }),
                  val40.bytes > 0x0 &&
                    val6.jsxs("div", {
                      children: [
                        val6.jsx("b", {
                          children: mb(val40.bytes, val31.x.mb),
                        }),
                        val6.jsx("span", {
                          children: val31.x.size,
                        }),
                      ],
                    }),
                  val30 !== null &&
                    val30 > 0x0 &&
                    val6.jsxs("div", {
                      title: val31.stats.made,
                      children: [
                        val6.jsx("b", {
                          children: val30.toLocaleString(),
                        }),
                        val6.jsx("span", {
                          children: val31.stats.kpi,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          val6.jsx("div", {
            className: "queue-progress",
            children: val6.jsx("div", {
              style: {
                width: val37 * 0x64 + "%",
              },
            }),
          }),
          val6.jsxs("div", {
            className: "flex\x20gap-2\x20flex-wrap\x20items-center",
            children: [
              val27.running &&
                !val27.paused &&
                val6.jsxs("button", {
                  className: "btn",
                  onClick: () => val10.queuePause(),
                  children: [
                    val6.jsx(val9, {
                      size: 0xf,
                    }),
                    "\x20",
                    val31.queue.pause,
                  ],
                }),
              val27.running &&
                val27.paused &&
                val6.jsxs("button", {
                  className: "btn-primary",
                  onClick: () => val10.queueResume(),
                  children: [
                    val6.jsx(val11, {
                      size: 0xf,
                    }),
                    "\x20",
                    val31.queue.resume,
                  ],
                }),
              val27.running &&
                val6.jsxs("button", {
                  className: "btn-danger",
                  onClick: () => val10.queueCancel(),
                  children: [
                    val6.jsx(CircleX, {
                      size: 0xf,
                    }),
                    "\x20",
                    val31.queue.cancelAll,
                  ],
                }),
              !val27.running &&
                val27.failed > 0x0 &&
                val6.jsxs("button", {
                  className: "btn-primary",
                  onClick: () => val10.queueRetry(),
                  children: [
                    val6.jsx(val12, {
                      size: 0xf,
                    }),
                    "\x20",
                    val31.queue.retryFailed,
                    "\x20(",
                    val27.failed,
                    ")",
                  ],
                }),
              val38 &&
                val6.jsxs("button", {
                  className: "btn",
                  onClick: () => val10.showItemInFolder(val38),
                  children: [
                    val6.jsx(val13, {
                      size: 0xf,
                    }),
                    "\x20",
                    val31.queue.openResults,
                  ],
                }),
              !val27.running &&
                val27.failed > 0x0 &&
                val6.jsxs("span", {
                  className: "text-sm text-red-400",
                  children: [val27.failed, "\x20", val31.queue.filesFailed],
                }),
            ],
          }),
        ],
      }),
      val39.map(([arg69, arg70]) => {
        const val54 = arg70.rows.filter((arg71) => arg71.p.status === "done").length;
        function fn19(arg72, arg73) {
          return fn11(arg72 - 0x3cf, arg73);
        }
        const val55 = arg70.rows.filter((arg74) => arg74.p.status === "error").length,
          val56 = !!val34[arg69];
        function fn20(arg75, arg76) {
          return fn11(arg76 - -0x142, arg75);
        }
        return val6.jsxs(
          "div",
          {
            className: "page-card queue-group",
            children: [
              val6.jsxs("button", {
                className: "queue-group-head",
                title: val56 ? val31.x.expand : val31.x.collapse,
                onClick: () =>
                  val35((arg77) => ({
                    ...arg77,
                    [arg69]: !arg77[arg69],
                  })),
                children: [
                  val56
                    ? val6.jsx(ChevronRight, {
                        size: 0xf,
                      })
                    : val6.jsx(val14, {
                        size: 0xf,
                      }),
                  val6.jsx("span", {
                    className: "queue-group-name",
                    children: arg70.name,
                  }),
                  val6.jsxs("span", {
                    className: "queue-group-count",
                    children: [val54, "/", arg70.rows.length, "\x20", val31.x.partsWord],
                  }),
                  val55 > 0x0 &&
                    val6.jsxs("span", {
                      className: "queue-group-failed",
                      children: [val55, "\x20", val31.queue.failed],
                    }),
                ],
              }),
              !val56 &&
                val6.jsx("div", {
                  className: "queue-rows",
                  children: arg70.rows.map(({ p: arg78, index: arg79 }) =>
                    val6.jsx(
                      PartRow,
                      {
                        p: arg78,
                        index: arg79,
                        t: val31,
                        open: val32 === arg79,
                        onToggle: val36,
                        paused: val27.paused,
                      },
                      arg79,
                    ),
                  ),
                }),
            ],
          },
          arg69,
        );
      }),
    ],
  });
}
function fn3(arg80, arg81) {
  arg80 = arg80 - 0x8c;
  const val57 = fn4();
  let val58 = val57[arg80];
  if (fn3.RrFvtX === undefined) {
    var fn21 = function (arg82) {
      const val62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let val63 = "",
        val64 = "";
      for (
        let val65 = 0x0, val66, val67, val68 = 0x0;
        (val67 = arg82.charAt(val68++));
        ~val67 && ((val66 = val65 % 0x4 ? val66 * 0x40 + val67 : val67), val65++ % 0x4)
          ? (val63 += String.fromCharCode(0xff & (val66 >> ((-0x2 * val65) & 0x6))))
          : 0x0
      ) {
        val67 = val62.indexOf(val67);
      }
      for (let val69 = 0x0, val70 = val63.length; val69 < val70; val69++) {
        val64 += "%" + ("00" + val63.charCodeAt(val69).toString(0x10)).slice(-0x2);
      }
      return decodeURIComponent(val64);
    };
    (fn3.MQIKQa = fn21), (fn3.rKfNwh = {}), (fn3.RrFvtX = !![]);
  }
  const val59 = val57[0x0],
    val60 = arg80 + val59,
    val61 = fn3.rKfNwh[val60];
  return !val61 ? ((val58 = fn3.MQIKQa(val58)), (fn3.rKfNwh[val60] = val58)) : (val58 = val61), val58;
}
export { QueuePage as default };
function fn4() {
  const val71 = [
    "BgvUz3rO",
    "CxvLDwuTC3rHDhvZ",
    "ANn4CW",
    "ANn4",
    "EJbIAxfM",
    "Dgv4Dc1HBwjLCI00mda",
    "BtKGosa2idy",
    "CMvZDw1L",
    "tte1idjinMeYidiGmcaWidaTmIaYDJe2ytiGmIaWidaGmcaYidjOmtjHmIaYidaGmcaWidiTmLy3wG",
    "mte2nZjLsgHZuwO",
    "CMvUzgvYq29Uy3vYCMvUy3K",
    "B3bLBLjLC3vSDhm",
    "zgL2",
    "CxvLDwuTChjVz3jLC3m",
    "DxnLtwvTBW",
    "mtjht1f1Ae0",
    "Dgv4Dc1LBwvYywXKltqWma",
    "DgL0Bgu",
    "BwfW",
    "Bwf4",
    "CxvLDwvszxn1Bwu",
    "zw1WDhKTAgvYBW",
    "zxHWB3j0",
    "CxvLDwvqyxvZzq",
    "mtbJDxrkreu",
    "Cgf1C2vK",
    "mZy2mZzHru1ys24",
    "zg9Uzvn0",
    "DgDYngq2",
    "yNL0zxm",
    "CxvLDwvszxrYEvbHCNq",
    "mw1NBgf5",
    "ndeYmZy1mgHgzLrJwG",
    "zMLSzxngywLSzwq",
    "ChjVy2vZC2LUz1n0",
    "CMv0CNLgywLSzwq",
    "CxvLDwvszxrYEq",
    "D3jPDgvuzxH0",
    "CMvUzgvYu2vJ",
    "nwr2DxbY",
    "ChjVy2vZC2LUzW",
    "B3bLBLbHDgG",
    "zxrHu2HVCNq",
    "Cgf0Aa",
    "zMLSDgvY",
    "zM9YrwfJAa",
    "mtKYvu5Oq1fz",
    "Dgv4Dc1Hy2nLBNqGyw5PBwf0zs1ZCgLU",
    "Dg9mB2nHBgvtDhjPBMC",
    "DgDxyxjUAw5N",
    "D2fPDgLUzW",
    "Dg9HC3q",
    "CxvLDwuTDgH1Bwi",
    "zxHWyw5K",
    "CxvLDwuTzxjYB3i",
    "DgDtzw50",
    "CxvLDwuTCMfUz2u",
    "C2vUDa",
    "CxvLDwuTz3jVDxaTBMfTzq",
    "zw50CMLLCW",
    "C3rHCNrLzef0",
    "DxnLu3rHDgu",
    "CgfYDeLUzgv4",
    "imk3ia",
    "mZK0odK3oefSyu9mwq",
    "B3v0u2vJ",
    "CxvLDwu",
    "CxvLDwuTywn0lwrHBMDLCG",
    "zMLUza",
    "C29YDa",
    "DMLKzw9jza",
    "zg9Uzq",
    "Dg9gAxHLza",
    "zgvZy3jPyMu",
    "CgfNzs1ZDwiGDhj1BMnHDgu",
    "ngPKB21K",
    "C2L6zuj5DgvZ",
    "CM93CW",
    "C3bLzwq",
    "CxvLDwuTA3bPCW",
    "ChjVz3jLC3m",
    "DgDtzw5KAw5N",
    "nJaYmZnRsgDZuMS",
    "y2LYy2XL",
    "mwjTztvP",
    "zw1WDhLuAxrSzq",
    "CNvUBMLUzW",
    "q2HLDNjVBLjPz2H0",
    "C3bHBG",
    "CMvKDwnL",
    "y29WAwvK",
    "BMf2",
    "y3vYCMvUDeXHyMvS",
    "yNrU",
    "CxvLDwuTz3jVDxaTzMfPBgvK",
    "C2vUzgLUzW",
    "Dg90ywW",
    "ndaYodrdtNLkBue",
    "ttiXide0sdeX",
    "CMvJDa",
    "y2f0y2G",
    "iokAOca",
    "ic8G",
    "mxv6AhzY",
    "Dg5XCMXI",
    "B3bLBKzVBgrLCG",
    "ChjL",
    "A3bP",
    "y3vYCMvUDa",
    "mtuYotiYodr0BgDzsK8",
    "CxvLDwuTz3jVDxaTy291BNq",
    "yNrUlxbYAw1HCNK",
    "Cgf1C2u",
    "nJHLC2D2",
    "y2fUy2vSBgvK",
    "C3rHDhm",
    "zw1WDhKTAgvYBY1Py29U",
    "y2fUy2vSqwXS",
    "B3v0ugf0Aa",
    "CgfNzs10AxrSzq",
    "yNv0Dg9U",
    "Bte1ideWltqGnca0idq",
    "C3rHDhvZ",
    "y29SBgfWC2u",
    "CgfYDhm",
    "zgfZAgjVyxjK",
    "Dgv4Dc1YzwqTndaW",
    "CgfNzs1JyxjKihf1zxvLlwDYB3vW",
    "C2L6zq",
    "zxjYB3i",
    "DgDfCNjVCG",
    "CxvLDwuTCM93ihf1zxvLlxjVDY0",
    "BM93",
    "zw1WDhK",
    "DxnLq2fSBgjHy2S",
    "BwLUlxCTma",
    "ywXSrg9Uzq",
    "CxvLDwuTDgCGCxvLDwuTDgCT",
    "CgfNzq",
    "CxvLDwuTCM93CW",
    "zxrH",
    "zgvZy3jPChrPB24",
    "Bte1idKTnIa2",
    "Dgv4Dc1ZBsb0zxH0lxjLzc00mda",
    "zMfPBgvK",
    "rMLSzvzPzgvV",
    "mta2ngHUAK12DW",
    "CxvLDwuTzMfJDhm",
    "CgfKu3rHCNq",
    "CxvLDwvdyw5JzwW",
    "C2v0",
    "q2LYy2XLwa",
    "ndK3D3DKwwnI",
    "C2HVD0L0zw1jBKzVBgrLCG",
  ];
  fn4 = function () {
    return val71;
  };
  return fn4();
}
