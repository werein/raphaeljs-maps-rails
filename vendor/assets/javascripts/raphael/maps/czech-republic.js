/*
 * svgWidth = 800
 * svgHeight = 600
 */

var czechRepublicMap = {
    kvk: "M69.47,280.299l-7.113-0.291v-5.162l-5.162-2.445l0.271-5.977L42.251,256.1l-9.509-4.89l-4.076-7.336l-4.075-4.619l1.902-8.422l-6.249-9.509l-4.483-4.483l3.125-6.113l-2.716-6.792h8.694l2.173,2.174v5.977h4.619l2.581,2.581l-1.495,4.211l2.717,2.717v6.792l4.076,4.076l1.902-9.781c0,0-1.358-3.261,0-4.619s5.434-5.434,5.434-5.434l2.445-8.151l10.596-5.705v-3.804l3.396-3.396l7.743-1.223l9.781-1.63l3.26,3.26l5.434-6.792l10.053-2.717l10.596,7.879l4.844,4.844h10.017l4.897,1.85c0,0-0.257,4.215,0,4.709s10.736-1.13,10.736-1.13l4.709,4.709l-4.615,4.615l2.543,4.803l-1.695,6.215l4.144,4.144l-1.695,3.579l4.708,6.404l-4.709,4.708l6.969,6.97l-3.39,8.288l-5.651,1.507v8.476l-7.534-5.651l-7.911-0.942l-15.069,9.794v5.651l-3.861,3.861l-6.31-3.107l-3.202,1.507l-6.216-3.768l-7.534,3.202l-5.368,5.368l-4.991-4.427L69.47,280.299z",
    plk: "M151.027,246.771l-3.39,8.288l-5.651,1.507v8.476l-7.534-5.651l-7.911-0.942l-15.069,9.794v5.651l-3.861,3.861l-6.31-3.107l-3.202,1.507l-6.216-3.768l-7.534,3.202l-5.368,5.368l-4.991-4.427l-4.521,3.768l-7.113-0.291l-7.879,11.954L54,299.11l-8.216,7.523l6.249,7.063l7.607,5.162l-0.543,7.879l5.162,5.978l-0.272,7.335l8.151,5.706l-0.815,8.965l1.358,6.248l6.521,3.532l5.706,5.978l4.347,7.335l7.879,2.174l2.717-1.901l7.063,1.358l8.966,6.521l1.087,7.335l7.879,7.879v3.804l7.335,5.706l1.358,5.705l4.891,3.532h6.792l6.521,6.521l5.977,8.693l0.815,9.51l11.139,7.335l3.827-6.375l0.075-3.775l1.675-5.975l5.25-2.25l1.25-3.5l-2.5-4l1.25-9.75l4.5,1.5l1.5-2.75l6-2.25l2.5-6l-3-6l4.75-2.5l-3.75-4.25l3-2.75v-3.75l3.5-2.75l4.5-7l-3.5-5.75l0.75-7.75v-4.5l-1.5-5.5l2.75-4l-3.25-5.5l0.25-6l1.25-4.5l-3.25-2.5l-3.5-4.5l1.75-5l-4-4.25l5.25-3.75h5.5l4.75-5.75l-2.25-4.5l2.5-4.25l-2.25-6l4.75-4.75l-1.25-3.75l0.5-6.5l-4.25-2.75l-5-1l-0.25-4l-5,1c0,0-5.056-6.706-5.25-6.75s-4.5,1.75-4.5,1.75l-4.5-2.25l-4-2.25l-0.75-4.25l-6.75-0.5l-4,2.5l-3.5-3.25l2.75-3.5l-2.295-2.884l-6.781-3.956L151.027,246.771z",
    pha: "M256.167,247.61l7-3.5l2.667,1.5c0,0,4.169,0.805,4.667,0.333s-1.167-4.333-1.167-4.333l3-1.833l4.167,0.833l4.667-2.5l2.5-3.333l5.5,0.167l1.333,2.333l3.167,1l1,1.5l3.667-0.833l-1,3.667l4.833,1.167l2.167,3.5h3.167l3,3.833l-0.5,3l-4.833,0.5l-3.333,2.333l2.333,2l0.5,5.167l-3.5,3.167l-4-2.667L292,263.944l-2.5,2.5l-4.667,1.167l-2.667,3.833l-3.667,0.167l-3.5,1.667l-1,2.667l-4.5,1l-3.333-3.667l1.667-5.333l-4.667-2.333l1.333-3l-3.833-2.5l-3-4.333l2.333-3.5L256.167,247.61z",
    lbk: "M401.151,127.863l6.046,6.834l-1.883,7.911l3.201,7.723l-1.506,4.144l3.767,3.767l-3.014,6.027l5.651,5.651v3.579l-9.606,2.072l-4.521-4.521l-5.839,3.767v5.085l-4.897,2.825l-3.202-4.897l-10.925-3.767l-7.157,4.709l-7.911-5.086l-5.085-2.26v-3.767l-7.111-3.626l-3.249-3.249h-5.557l-4.238-4.238l-4.144,7.157l-6.593,7.346l-2.26-2.26l-5.65,0.941v4.709l-7.911,6.404l-9.418,2.26l-2.26-6.781l-10.928,0.565l-5.084-6.217l-7.159-11.863v-5.086l-3.39-5.462l4.002-6.734l4.191-4.191v-3.861l4.803-4.803l-1.507-6.027l7.157,0.942l6.404,2.449l0.942-7.346l6.402-2.236l16.845,5.162l5.434-7.879l10.052-0.543c0,0,6.614,1.228,7.064,0.815s1.63-9.509,1.63-9.509l2.173-8.694l-4.619-4.619l4.347-4.347h7.335l3.804,3.532l5.977-3.26l3.26,5.706l4.89-2.173l5.434,6.521l-2.445,5.434l2.717,8.422l4.754,4.754l4.483,4.483l0.543,7.879l1.766,1.766l6.113-5.57L401.151,127.863z",
    olk: "M617.687,214.259v10.351h-4.937l-4.5,4.5l-10,6.5v7l-3.5,3.5l2.75,5l-6,8.5l-1.75,7.75l4.125,4.125L590,277.86l-1.25,7.5l3.625,3.625H597v5.375h6.25l4,4l7.25-2l6,8.75h5l4.25,2.25l5-3.5l4.25,4.25l5.5-3l7.5,4l-1.75,8.5H658l2.75,7.5l6,2l5.125,5.125l-0.625,5.125h5.5l2.75,5.5l-4.125,4.125l-4.125-1.375l-6.75,4.5v7l-5.375,5.375l-5.875-6.625l-7.75,2.75l2.25,6.75l-6.75,2l-5-1.5l-4.125,4.125L629,375.11l-3.875-3.875l-6.625,0.375l-2-4.75l-4,3.5l2.25,7.75l-3.75,3.75l-2.25,3.5l-9.5,1.5l-5.875,5.875l-3.875-6.625v-3.75l-3.125-3.125H579.5l-1-5.375v-5l-6-3.75v-4.5l-3.875-3.875l-2.375-5.125h-5.5l-3.75,4.25l4,4l4.125,4.125l-4.375,6.375l-3,3l-7.5-5.5l3.5-3.5l-4.5-6v-6.5l5-5.25l-5.75-1.75l-4.75-0.25l2.917-7.833l3.166-4.5v-5.667l5.167-5.167v-7.5l-5.667-2.5v-4.5l-4.5-8.833l-4.166-8.167l5.583-3.749l-2.417-2.417l-1-7.334l-2.5-5.833v-5.667c0,0,9.888-7.911,10-8.167s-2.5-4.167-2.5-4.167l1.5-8.667l4.667-9l1.742-8.187l8.693-4.076h6.793l0.271-8.422l-4.483-4.483l-4.482-1.766l-3.261-11.683l-7.063-3.804l3.804-7.335l8.422,2.173l6.249,1.358l10.324,2.989l4.211,4.211l7.2-2.31l1.087,7.064l5.705,4.347h8.694l2.173,7.607L617.687,214.259z",
    pak: "M555.742,226.757L554,234.944l-4.667,9l-1.5,8.667l2.5,4.167l-10,8.167v5.667l2.5,5.833l1,7.334l2.417,2.417l-5.583,3.749l4.166,8.167l4.5,8.833v4.5l5.667,2.5v7.5l-5.167,5.167v5.667l-3.166,4.5l-6.167-6.167H522l-3.667,6H506l-3.25,3.25l-7.25-7.25l-5.833-0.167l-7.167-8.5l-14-3.166l-2.5-5.834l-6.667,0.167v-3.667l-6.833,4.334v5.666l-7.667-2.666l-3.833-2v-5l-5.167-2.667l-4-0.833l-4.166-4.334l-7-4.5L411,299.61l-9-7l-2-8.166l3.667-3.667l0.5-7.667l-6.833-3.333l-0.167-4.667l-5.5-1.833L386,259.944l0.833-4.667l3.415-4.93l8.711-1.944l9.936-8.604l5.274,3.014c0,0,9.129,0.33,9.605,0s5.086-6.969,5.086-6.969h4.897v5.651l3.484,1.225l3.296-3.296l6.404-3.202l7.723,0.188l3.391,3.39v6.593h4.521l4.144,4.144l7.252,4.238l4.238,4.238l6.592-1.883h9.418l1.695-7.157l5.274-5.274l9.982-2.825v-5.462h3.955l8.395,3.759l12.387,6.965l7.063-7.063l3.668-3.668l-0.136-6.385L555.742,226.757z",
    vys: "M502.75,339.86l-7.25-7.25l-5.833-0.167l-7.167-8.5l-14-3.166l-2.5-5.834l-6.667,0.167v-3.667l-6.833,4.334c0,0,0.229,5.478,0,5.666s-7.667-2.666-7.667-2.666l-3.833-2v-5l-5.167-2.667l-4-0.833l-4.166-4.334l-7-4.5L411,299.61l-9-7l-6,0.5l-4,3.25l0.5,6l-5.75-0.25l-2,4.25H379l-3.25,3l-4-1l-3,1.75l-0.75,4l-3.75,3.5l-0.25,5.75l7.75,3.75c0,0,0.282,4.616,0.25,5.25s-4.75,3.25-4.75,3.25l-3.75-1.75l-2.25,4l-4.5-0.75l-6.5,0.25l-8.25-1.25l-5.5,5.5l-0.25,5.25l-2.75,2.75l1.75,6.5l-0.25,7l-3,3.75v7.75l2.75,5.75l-1.25,4.5l2.75,5l5.5,4.5l4.75-2.75l6.25,3.5l2.75,5l5.5,5l5-2.75l8,3l7.25-1.25l3.25,4.5l-1,5.5l6.5,6.5l8.5,0.25l7-1.5l7.25,5.75l-0.75,4.5l-5.25,1l-1,6.25l-5.5,5.75l4.5,4l4,6.25l4.5-2.25l4.5,3.25l5.5-5.75l5.75,4.25l3-5.75l3.5-1l3.25-4.5h6l2.25-5.25l7-3l6.25,4.25l4.25-2.5l5.75,1.75l5.5-2.75l3-4.75l4.75,1.25l2.25-5.5l3.75-1l1.75-3.25l-4.5-3.25l-1.5-5l5.75-3.5l-5.25-5.25l1.25-4.5l4-3.25l-3.75-4.75l4.5-3l1.75-4l9.75-4.5l-0.5-9l-2-5l2.25-4.75l-2.75-6.5l5-3l1.5-3l-5.25-3.5L502.75,339.86z",
    zlk: "M737.5,365.046l-5.75-2.686l-1.25-5.75l-7-4.5l-0.5-4.5l-5.5,2.25h-5.25l-6-4.25l-8-1.75l-8,3.25l-5-4.25h-5.75l-4.125,4.125l-4.125-1.375l-6.75,4.5v7c0,0-4.336,4.626-5.375,5.375s-5.875-6.625-5.875-6.625l-7.75,2.75l2.25,6.75l-6.75,2l-5-1.5l-4.125,4.125L629,375.11l-3.875-3.875l-6.625,0.375l-2-4.75l-4,3.5l2.25,7.75l-3.75,3.75l-2.25,3.5l-9.5,1.5l-5.875,5.875l-3.625,4.875l3,5.25l-1.5,5.25l6.75,0.75l-0.75,5l-4.5,3l-5,5.25l3.75,4.75l8.25-3.25l3,3.25l-0.75,5.75l6.25,3.5l8.25,1l-0.25,5.75l5.25-0.25l5.5,5l6.5-2.5l5.75,3.5l0.25,4l6.25,1.5l3.75,5.5l2.146,2.7h4.891l7.064-4.347l4.89-8.423l10.053-0.543l1.766-13.449l3.939-3.939l13.041-1.087l6.793-9.78V409.06l3.531-10.053v-7.063l5.434-8.422l7.336-1.902l6.792-3.532l5.978-2.173L737.5,365.046z",
    msk: "M617.687,214.259v10.351h-4.937l-4.5,4.5l-10,6.5v7l-3.5,3.5l2.75,5l-6,8.5l-1.75,7.75l4.125,4.125L590,277.86l-1.25,7.5l3.625,3.625H597v5.375h6.25l4,4l7.25-2l6,8.75h5l4.25,2.25l5-3.5l4.25,4.25l5.5-3l7.5,4l-1.75,8.5H658l2.75,7.5l6,2l5.125,5.125l-0.625,5.125h5.5l2.75,5.5h5.75l5,4.25l8-3.25l8,1.75l6,4.25h5.25l5.5-2.25l0.5,4.5l7,4.5l1.25,5.75l5.75,2.686l4.619-1.63l8.694-11.411l-0.544-6.521l5.978-2.717l4.891,2.445l8.15-1.63l6.792,2.173l8.694-4.075l1.358-6.521l-4.891-13.312l-2.988-9.237h-7.064l-2.988-3.532l-8.966-2.717l-1.358-6.521l-5.978-13.041l3.261-7.063l-2.717-1.087l-2.717-7.607l-5.434,4.075l-10.596-5.977l-9.238-1.358l-3.26,5.706l-4.891-8.15l-6.249-2.989l-2.988-3.804l-5.434,3.532l-5.434-2.445l0.407-6.657l-4.482-4.482l-6.521,1.087l-3.261,8.422c0,0-5.534,5.937-6.249,6.249s-5.841-0.136-5.841-0.136l-5.569-5.569l-5.706-1.902l-2.988-8.965l-5.162-7.336l-5.842,0.68l-5.569-5.57v-4.619l9.781-2.989l7.743-3.804v-4.483l-5.026-5.026l1.087-5.434l-5.434-5.434l-2.718,5.434l-4.075,4.075l-13.584-1.087L617.687,214.259z",
    jhc: "M173.5,445.61l6,1.75l6.116,5.332l-1,3.097l4.347,6.521l7.607,1.359l2.173,6.792l5.162,6.792l2.174,6.249l5.705,0.271l9.781,9.237l5.162,1.901l5.706,6.793l-4.075,4.347l8.966,8.966h10.324l10.324,1.901l8.422,4.891l11.954-10.053l2.445-6.248l6.249,5.434l6.792,1.358l5.434-1.358l8.966,5.977l3.532-5.705l-1.086-5.434l1.087-9.237l7.607-6.248l2.717-7.879l7.064,0.271l9.781,2.988l1.63-2.988l-2.445-4.347l1.358-5.978l2.445-7.336l-0.815-9.509l-0.543-10.053l2.988-5.705l8.966,2.988l7.607,1.631l2.445,8.15l11.683-2.717l3.26-4.348l7.879,0.272l11.955,6.248l4.075,1.902l4.077,5.972l3.25-7l-4-6.25l-4.5-4l5.5-5.75l1-6.25l5.25-1l0.75-4.5l-7.25-5.75l-7,1.5l-8.5-0.25l-6.5-6.5l1-5.5l-3.25-4.5l-7.25,1.25l-8-3l-5,2.75l-5.5-5l-2.75-5l-6.25-3.5l-4.75,2.75l-5.5-4.5l-2.75-5l1.25-4.5l-2.75-5.75v-7.75l3-3.75l0.25-7l-1.75-6.5l-3.25-4.75l-2.25-5.5l-4.25,0.5l-7.75-6.5l-5.25,3.75l1.5,7.75l-6.5,3.5l-3.5,4l-7.25-3l-8-2l-4.5,0.75l-6.5-3l-6.25,3.75c0,0-3.648-0.235-4.25-0.25s-4-5-4-5h-6l-3,3.75l-13.5,1.5l-3.75-4h-4.75l-2.75,4.75l-7,3.5l-4.5-2.25l-13.75-0.5l-2.75,4l1.5,5.5v4.5l-0.75,7.75l3.5,5.75l-4.5,7l-3.5,2.75v3.75l-3,2.75l3.75,4.25l-4.75,2.5l3,6l-2.5,6l-6,2.25l-1.5,2.75l-4.5-1.5l-1.25,9.75l2.5,4l-1.25,3.5l-5.25,2.25l-1.675,5.975L173.5,445.61z",
    ulk: "M110.174,190.351l9.509-5.162l-0.271-7.335l3.26-3.261l9.781-1.63l8.151,1.087l3.26-5.977v-4.347l2.717-4.89h3.26l1.63,4.89l4.075-1.358v-5.977l2.582-2.582l1.494-3.939h3.803l1.63,5.162l4.347,2.717l8.422-5.977l0.543-10.052l3.939-3.939l4.483,2.309l5.434-4.89l3.532,3.532l6.521-3.532l7.335-0.815l1.63,3.804h2.989l4.89-4.89v-7.607l6.249-1.087l4.347-4.347l5.705,3.532l8.694-4.619l3.532-3.532l7.335,0.543l3.532-7.063h4.89l1.902,2.173l9.781-3.532l1.087-6.792l-8.151-2.717v-5.162l-8.15-1.63l2.988-5.434l2.717-7.064l8.151,3.804l1.902,1.902h4.89l7.607-2.717l4.89,4.89l4.891,4.619l0.271,5.977l-4.075,6.792l9.237-1.63l-1.63,9.509v4.347l-6.402,2.236l-0.942,7.346l-6.404-2.449l-7.157-0.942l1.507,6.027l-4.803,4.803v3.861l-4.191,4.191c0,0-4.07,5.686-4.002,6.734s3.39,5.462,3.39,5.462v5.086l7.159,11.863l5.084,6.217l-2.26,3.015l0.942,7.158h-4.709l-1.507,4.521h-4.897l1.695,8.476l-3.579,3.579l-8.099-0.753l-4.333,4.333h-16.387l-7.911-3.579l-6.404,3.39v4.521l-5.18,5.18h-5.933l-2.025,2.024l0.142,3.909l-5.651-3.391l-6.215,6.215l-8.665-0.188l-8.288,5.086l-7.346,0.376l-5.651,5.274l-1.13,6.592l-6.216,2.637l-3.39,5.462l-6.781-3.956l-4.147,0.001l-6.969-6.97l4.709-4.708l-4.708-6.404l1.695-3.579l-4.144-4.144l1.695-6.215l-2.543-4.803l4.615-4.615l-4.709-4.709l-10.736,1.13v-4.709l-4.897-1.85h-10.017L110.174,190.351z",
    jhm: "M546.667,336.777l-6.167-6.167H522l-3.667,6H506l-3.25,3.25l-1.25,4.75l5.25,3.5l-1.5,3l-5,3l2.75,6.5l-2.25,4.75l2,5l0.5,9l-9.75,4.5l-1.75,4l-4.5,3l3.75,4.75l-4,3.25l-1.25,4.5l5.25,5.25l-5.75,3.5l1.5,5c0,0,4.37,2.587,4.5,3.25s-1.75,3.25-1.75,3.25l-3.75,1l-2.25,5.5l-4.75-1.25l-3,4.75l-5.5,2.75l-5.75-1.75l-4.25,2.5l-6.25-4.25l-7,3l-2.25,5.25h-6l-3.25,4.5l-3.5,1l-3,5.75l-5.75-4.25l-5.5,5.75l-4.5-3.25l-4.5,2.25l-3.25,7l3.53,0.549l7.063,0.814l8.15,5.978l8.151,0.815l1.901-3.261l8.15,0.815l11.955,8.422l1.358,4.348l15.757,8.693l18.747-0.271l14.399,2.717l5.434-6.249l2.988-8.15l10.053-0.543l4.347,4.618l10.053,1.63l1.358,6.793l5.162-1.631l8.966,5.435l8.15-2.174l5.434,3.532l2.717,13.584l4.348-0.543l3.26-11.411l2.174-7.879l8.966-11.14l2.173-7.607l3.261-1.358l4.89-4.89h5.162l10.053,4.347l8.694,5.162l8.693-5.705l7.336,4.89l6.521-1.63l6.792-6.249l-2.146-2.7l-3.75-5.5l-6.25-1.5l-0.25-4l-5.75-3.5l-6.5,2.5l-5.5-5l-5.25,0.25l0.25-5.75l-8.25-1l-6.25-3.5l0.75-5.75l-3-3.25l-8.25,3.25l-3.75-4.75l5-5.25l4.5-3l0.75-5l-6.75-0.75l1.5-5.25l-3-5.25l3.625-4.875l-3.875-6.625v-3.75l-3.125-3.125H579.5l-1-5.375v-5l-6-3.75v-4.5l-3.875-3.875l-2.375-5.125h-5.5l-3.75,4.25l4,4l4.125,4.125l-4.375,6.375l-3,3l-7.5-5.5l3.5-3.5l-4.5-6v-6.5l5-5.25l-5.75-1.75l-4.75-0.25L546.667,336.777z",
    stc: "M404.167,273.11l-6.833-3.333l-0.167-4.667l-5.5-1.833L386,259.944l0.833-4.667l3.415-4.93l2.072-6.781l-8.099-4.332l3.956-6.969l-2.072-4.521l1.13-5.65l-1.318-6.028l-3.014-3.014l-5.462,3.579l-8.853-1.13v-5.274l-4.803-4.803l-6.31-1.224l-1.318-4.709l4.803-4.803l-2.919-8.005l1.695-4.709l-2.825-4.521l2.446-3.768l-5.085-2.26v-3.767l-7.111-3.626l-3.249-3.249h-5.557l-4.238-4.238l-4.144,7.157l-6.593,7.346l-2.26-2.26l-5.65,0.941v4.709l-7.911,6.404l-9.418,2.26l-2.26-6.781l-10.928,0.565l-2.26,3.015l0.942,7.158h-4.709l-1.507,4.521h-4.897l1.695,8.476l-3.579,3.579l-8.099-0.753l-4.333,4.333h-16.387l-7.911-3.579l-6.404,3.39v4.521l-5.18,5.18h-5.933l-2.025,2.024l0.142,3.909l-5.651-3.391l-6.215,6.215l-8.665-0.188l-8.288,5.086l-7.346,0.376l-5.651,5.274l-1.13,6.592l-6.216,2.637l-3.39,5.462l2.295,2.884l-2.75,3.5l3.5,3.25l4-2.5l6.75,0.5l0.75,4.25l4,2.25l4.5,2.25l4.5-1.75l5.25,6.75l5-1l0.25,4l5,1l4.25,2.75l-0.5,6.5l1.25,3.75l-4.75,4.75l2.25,6l-2.5,4.25l2.25,4.5l-4.75,5.75H197l-5.25,3.75l4,4.25l-1.75,5l3.5,4.5l3.25,2.5l-1.25,4.5l-0.25,6l3.25,5.5l13.75,0.5l4.5,2.25l7-3.5l2.75-4.75h4.75l3.75,4l13.5-1.5l3-3.75h6l4,5l4.25,0.25l6.25-3.75l6.5,3l4.5-0.75l8,2l7.25,3l3.5-4l6.5-3.5l-1.5-7.75l5.25-3.75l7.75,6.5l4.25-0.5l2.25,5.5l3.25,4.75l2.75-2.75l0.25-5.25l5.5-5.5l8.25,1.25l6.5-0.25l4.5,0.75l2.25-4l3.75,1.75l4.75-3.25l-0.25-5.25l-7.75-3.75l0.25-5.75l3.75-3.5l0.75-4l3-1.75l4,1l3.25-3h5.75l2-4.25l5.75,0.25l-0.5-6l4-3.25l6-0.5l-2-8.166l3.667-3.667L404.167,273.11zM310,254.11l-4.833,0.5l-3.333,2.333l2.333,2l0.5,5.167l-3.5,3.167l-4-2.667L292,263.944l-2.5,2.5l-4.667,1.167l-2.667,3.833l-3.667,0.167l-3.5,1.667l-1,2.667l-4.5,1l-3.333-3.667l1.667-5.333l-4.667-2.333l1.333-3l-3.833-2.5l-3-4.333l2.333-3.5l-3.833-4.667l7-3.5l2.667,1.5l4.667,0.333l-1.167-4.333l3-1.833l4.167,0.833l4.667-2.5l2.5-3.333l5.5,0.167l1.333,2.333l3.167,1l1,1.5l3.667-0.833l-1,3.667l4.833,1.167l2.167,3.5h3.167l3,3.833L310,254.11z",
    hkk: "M401.151,127.863l8.151,0.543l8.965,4.075l2.717,2.717l6.249,1.087l6.792-3.804l2.717,5.977l3.804,8.422h4.891l7.063-2.717l4.348,8.15l-0.544,5.162l6.793-4.89l4.618-4.619l8.15,5.705l4.076,0.272l1.358-5.977h11.139l13.856,13.584l-4.619,4.076l-1.087,7.879l-8.693,3.26l-12.498,9.781l1.087,5.434l7.063,8.15l5.978-2.988l3.396,3.396v4.211l3.871,3.872l4.958-0.611l5.706,10.053l7.879,6.249l1.358,10.053l2.828,5.804l-8.395-3.759h-3.955v5.462l-9.982,2.825l-5.274,5.274l-1.695,7.157h-9.418l-6.592,1.883l-4.238-4.238l-7.252-4.238l-4.144-4.144h-4.521V239.8l-3.391-3.39l-7.723-0.188l-6.404,3.202l-3.296,3.296c0,0-3.148-1.099-3.484-1.225s0-5.651,0-5.651h-4.897l-5.086,6.969h-9.605l-5.274-3.014l-9.936,8.604l-8.711,1.944l2.072-6.781l-8.099-4.332l3.956-6.969l-2.072-4.521l1.13-5.65l-1.318-6.028l-3.014-3.014l-5.462,3.579l-8.853-1.13v-5.274l-4.803-4.803l-6.31-1.224l-1.318-4.709l4.803-4.803l-2.919-8.005l1.695-4.709l-2.825-4.521l2.446-3.768l7.911,5.086l7.157-4.709l10.925,3.767l3.202,4.897l4.897-2.825v-5.085l5.839-3.767l4.521,4.521c0,0,9.508-1.965,9.606-2.072s0-3.579,0-3.579l-5.651-5.651l3.014-6.027l-3.767-3.767l1.506-4.144l-3.201-7.723l1.883-7.911L401.151,127.863z"}