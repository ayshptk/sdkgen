"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var path_1 = __importDefault(require("path"));
var inquirer_1 = __importDefault(require("inquirer"));
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var node_fetch_1 = __importDefault(require("node-fetch"));
function overwriteKeys(keys) {
    fs_1.default.writeFileSync(path_1.default.resolve(__dirname, "sdkgen_keys.json"), JSON.stringify(keys, null, 2));
}
function handler(answers, keys) {
    return __awaiter(this, void 0, void 0, function () {
        var name, contract, chain;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(keys.etherscanApi === undefined || keys.etherscanApi === "")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default
                            .prompt([
                            {
                                type: "input",
                                name: "etherscanApi",
                                message: "etherscan api key?",
                            },
                        ])
                            .then(function (answers) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                keys.etherscanApi = answers.etherscanApi;
                                overwriteKeys(keys);
                                return [2 /*return*/];
                            });
                        }); })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(keys.token === undefined || keys.token === "")) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer_1.default
                            .prompt([
                            {
                                type: "input",
                                name: "token",
                                message: "access token? (dm @ayshptk to get one for free)",
                            },
                        ])
                            .then(function (answers) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        keys.token = answers.token;
                                        overwriteKeys(keys);
                                        return [4 /*yield*/, handler(answers, keys)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    name = answers.name, contract = answers.contract, chain = answers.chain;
                    console.log(chalk_1.default.gray("SDK Name: "), chalk_1.default.green(name));
                    console.log(chalk_1.default.gray("Chain: "), chalk_1.default.green(chain));
                    console.log(chalk_1.default.gray("Contract address: "), chalk_1.default.green(contract));
                    console.log(chalk_1.default.gray("Etherscan API key: "), chalk_1.default.green(keys["etherscanApi"]));
                    console.log(chalk_1.default.gray("Access token: "), chalk_1.default.green(keys["token"]));
                    inquirer_1.default
                        .prompt([
                        {
                            type: "confirm",
                            name: "confirm",
                            message: "Does this look correct?",
                            default: true,
                        },
                    ])
                        .then(function (answers) { return __awaiter(_this, void 0, void 0, function () {
                        var response, files_1;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!answers.confirm) return [3 /*break*/, 2];
                                    console.clear();
                                    console.log(chalk_1.default.gray("Setting up..."));
                                    return [4 /*yield*/, (0, node_fetch_1.default)("https://sdkgenapi-beta.ayushdot.net/generate", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                key: keys["token"],
                                                etherscan: keys["etherscanApi"],
                                            },
                                            body: JSON.stringify({
                                                name: name,
                                                address: contract,
                                                chain: chain,
                                            }),
                                        }).then(function (res) {
                                            return res.json();
                                        })];
                                case 1:
                                    response = _a.sent();
                                    if (response.error) {
                                        console.log(chalk_1.default.red(response.error));
                                        return [2 /*return*/];
                                    }
                                    files_1 = response.files;
                                    Object.keys(files_1).forEach(function (f) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    fs_1.default.mkdirSync(path_1.default.resolve("sdk"));
                                                    fs_1.default.mkdirSync(path_1.default.resolve("sdk/src"));
                                                    return [4 /*yield*/, write(f, files_1[f])];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [3 /*break*/, 3];
                                case 2:
                                    console.log(chalk_1.default.red("Operation cancelled by user"));
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.handler = handler;
function write(file, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.default.writeFileSync(path_1.default.resolve("./", "sdk", file), data)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
