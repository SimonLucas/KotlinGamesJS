(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'JavaJSTest'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'JavaJSTest'.");
    }root.JavaJSTest = factory(typeof JavaJSTest === 'undefined' ? {} : JavaJSTest, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var println_0 = Kotlin.kotlin.io.println;
  var Random = Kotlin.kotlin.random.Random;
  var L_1 = Kotlin.Long.NEG_ONE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var unboxChar = Kotlin.unboxChar;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.toString;
  var charArray = Kotlin.charArray;
  var Array_0 = Array;
  var numberToInt = Kotlin.numberToInt;
  var Math_0 = Math;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Random_0 = Kotlin.kotlin.random.Random_s8cxhz$;
  var shuffle = Kotlin.kotlin.collections.shuffle_9jeydg$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var L0 = Kotlin.Long.ZERO;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var math = Kotlin.kotlin.math;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var numberToDouble = Kotlin.numberToDouble;
  var Comparable = Kotlin.kotlin.Comparable;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Unit = Kotlin.kotlin.Unit;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var L10 = Kotlin.Long.fromInt(10);
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var TestTimeSource = Kotlin.kotlin.time.TestTimeSource;
  GriddleState.prototype = Object.create(Enum.prototype);
  GriddleState.prototype.constructor = GriddleState;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Actions.prototype = Object.create(Enum.prototype);
  Actions.prototype.constructor = Actions;
  XMouseEventType.prototype = Object.create(Enum.prototype);
  XMouseEventType.prototype.constructor = XMouseEventType;
  XKeyEventType.prototype = Object.create(Enum.prototype);
  XKeyEventType.prototype.constructor = XKeyEventType;
  function DoNothingAgent(action) {
    if (action === void 0)
      action = 0;
    this.action = action;
  }
  DoNothingAgent.prototype.getAgentType = function () {
    return 'DoNothingAgent';
  };
  DoNothingAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    return this.action;
  };
  DoNothingAgent.prototype.reset = function () {
    return this;
  };
  DoNothingAgent.$metadata$ = {kind: Kind_CLASS, simpleName: 'DoNothingAgent', interfaces: [SimplePlayerInterface]};
  DoNothingAgent.prototype.component1 = function () {
    return this.action;
  };
  DoNothingAgent.prototype.copy_za3lpa$ = function (action) {
    return new DoNothingAgent(action === void 0 ? this.action : action);
  };
  DoNothingAgent.prototype.toString = function () {
    return 'DoNothingAgent(action=' + Kotlin.toString(this.action) + ')';
  };
  DoNothingAgent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    return result;
  };
  DoNothingAgent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.action, other.action))));
  };
  function main(args) {
    var range = 3;
    var n = 20;
    var mt = new MutationTransducer(void 0, 0.5);
    var nSteps = 20;
    var output = mt.repSeq_vux9f0$(n, 9);
    for (var i = 0; i < nSteps; i++) {
      println(i);
      var $receiver = output;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        print(element);
      }
      println_0();
      output = mt.mutate_u4kcgn$(output, range);
    }
  }
  function MutationTransducer(mutProb, repeatProb) {
    if (mutProb === void 0)
      mutProb = 0.2;
    if (repeatProb === void 0)
      repeatProb = 0.5;
    this.mutProb = mutProb;
    this.repeatProb = repeatProb;
    this.random = Random.Default;
  }
  MutationTransducer.prototype.mutate_u4kcgn$ = function (input, range) {
    var output = new Int32Array(input.length);
    for (var i = 0; i < input.length; i++) {
      var p = this.random.nextDouble();
      if (p < this.mutProb) {
        output[i] = this.random.nextInt_za3lpa$(range);
      } else if (p < this.mutProb + this.repeatProb && i > 0) {
        output[i] = output[i - 1 | 0];
      } else {
        output[i] = input[i];
      }
    }
    return output;
  };
  MutationTransducer.prototype.randSeq_vux9f0$ = function (n, range) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = this.random.nextInt_za3lpa$(range);
    }
    return array;
  };
  MutationTransducer.prototype.repSeq_vux9f0$ = function (n, v) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = v;
    }
    return array;
  };
  MutationTransducer.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutationTransducer', interfaces: []};
  MutationTransducer.prototype.component1 = function () {
    return this.mutProb;
  };
  MutationTransducer.prototype.component2 = function () {
    return this.repeatProb;
  };
  MutationTransducer.prototype.copy_lu1900$ = function (mutProb, repeatProb) {
    return new MutationTransducer(mutProb === void 0 ? this.mutProb : mutProb, repeatProb === void 0 ? this.repeatProb : repeatProb);
  };
  MutationTransducer.prototype.toString = function () {
    return 'MutationTransducer(mutProb=' + Kotlin.toString(this.mutProb) + (', repeatProb=' + Kotlin.toString(this.repeatProb)) + ')';
  };
  MutationTransducer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mutProb) | 0;
    result = result * 31 + Kotlin.hashCode(this.repeatProb) | 0;
    return result;
  };
  MutationTransducer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mutProb, other.mutProb) && Kotlin.equals(this.repeatProb, other.repeatProb)))));
  };
  function RandomAgent(seed) {
    if (seed === void 0)
      seed = L_1;
    this.seed = seed;
    this.random = Random.Default;
  }
  RandomAgent.prototype.getAgentType = function () {
    return 'RandomAgent';
  };
  RandomAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    return this.random.nextInt_za3lpa$(gameState.nActions());
  };
  RandomAgent.prototype.reset = function () {
    return this;
  };
  RandomAgent.$metadata$ = {kind: Kind_CLASS, simpleName: 'RandomAgent', interfaces: [SimplePlayerInterface]};
  function SimpleEvoAgent(flipAtLeastOneValue, probMutation, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel) {
    if (flipAtLeastOneValue === void 0)
      flipAtLeastOneValue = true;
    if (probMutation === void 0)
      probMutation = 0.2;
    if (sequenceLength === void 0)
      sequenceLength = 200;
    if (nEvals === void 0)
      nEvals = 20;
    if (useShiftBuffer === void 0)
      useShiftBuffer = true;
    if (useMutationTransducer === void 0)
      useMutationTransducer = true;
    if (repeatProb === void 0)
      repeatProb = 0.5;
    if (discountFactor === void 0)
      discountFactor = null;
    if (opponentModel === void 0)
      opponentModel = new DoNothingAgent();
    this.flipAtLeastOneValue = flipAtLeastOneValue;
    this.probMutation = probMutation;
    this.sequenceLength = sequenceLength;
    this.nEvals = nEvals;
    this.useShiftBuffer = useShiftBuffer;
    this.useMutationTransducer = useMutationTransducer;
    this.repeatProb = repeatProb;
    this.discountFactor = discountFactor;
    this.opponentModel = opponentModel;
    this.random_8be2vx$ = Random.Default;
    this.buffer_8be2vx$ = null;
    this.solutions = ArrayList_init();
    this.scores = ArrayList_init();
    this.x = 1;
  }
  SimpleEvoAgent.prototype.getAgentType = function () {
    return 'SimpleEvoAgent';
  };
  SimpleEvoAgent.prototype.reset = function () {
    return this;
  };
  SimpleEvoAgent.prototype.getActions_84v5ee$ = function (gameState, playerId) {
    var tmp$, tmp$_0;
    var solution = (tmp$ = this.buffer_8be2vx$) != null ? tmp$ : this.randomPoint_0(gameState.nActions());
    if (this.useShiftBuffer) {
      if (solution == null)
        solution = this.randomPoint_0(gameState.nActions());
      else
        solution = this.shiftLeftAndRandomAppend_0(solution, gameState.nActions());
    } else {
      solution = this.randomPoint_0(gameState.nActions());
    }
    this.solutions.clear();
    this.solutions.add_11rb$(solution);
    this.scores.clear();
    tmp$_0 = this.nEvals;
    for (var i = 0; i < tmp$_0; i++) {
      var scoreArrray1 = new Float64Array(solution.length);
      var scoreArrray2 = new Float64Array(solution.length);
      var mut = this.mutate_0(solution, this.probMutation, gameState.nActions());
      var curScore = this.evalSeq_0(gameState.copy(), solution, playerId, scoreArrray1);
      var mutScore = this.evalSeq_0(gameState.copy(), mut, playerId, scoreArrray2);
      if (mutScore >= curScore) {
        solution = mut;
      }this.solutions.add_11rb$(mut);
      this.scores.add_11rb$(scoreArrray1);
      this.scores.add_11rb$(scoreArrray2);
    }
    this.buffer_8be2vx$ = solution;
    return solution;
  };
  SimpleEvoAgent.prototype.mutate_0 = function (v, mutProb, nActions) {
    if (this.useMutationTransducer) {
      var mt = new MutationTransducer(mutProb, this.repeatProb);
      return mt.mutate_u4kcgn$(v, nActions);
    }var n = v.length;
    var x = new Int32Array(n);
    var ix = this.random_8be2vx$.nextInt_za3lpa$(n);
    if (!this.flipAtLeastOneValue) {
      ix = -1;
    }for (var i = 0; i < n; i++) {
      if (i === ix || this.random_8be2vx$.nextDouble() < mutProb) {
        x[i] = this.mutateValue_0(v[i], nActions);
      } else {
        x[i] = v[i];
      }
    }
    return x;
  };
  SimpleEvoAgent.prototype.mutateValue_0 = function (cur, nPossible) {
    if (nPossible <= 1)
      return cur;
    var rx = this.random_8be2vx$.nextInt_za3lpa$(nPossible - 1 | 0);
    return rx >= cur ? rx + 1 | 0 : rx;
  };
  SimpleEvoAgent.prototype.randomPoint_0 = function (nValues) {
    var p = new Int32Array(this.sequenceLength);
    for (var i = 0; i !== p.length; ++i) {
      p[i] = this.random_8be2vx$.nextInt_za3lpa$(nValues);
    }
    return p;
  };
  SimpleEvoAgent.prototype.shiftLeftAndRandomAppend_0 = function (v, nActions) {
    var tmp$;
    var p = new Int32Array(v.length);
    tmp$ = p.length - 1 | 0;
    for (var i = 0; i < tmp$; i++) {
      p[i] = v[i + 1 | 0];
    }
    p[p.length - 1 | 0] = this.random_8be2vx$.nextInt_za3lpa$(nActions);
    return p;
  };
  SimpleEvoAgent.prototype.evalSeq_0 = function (gameState, seq, playerId, scoreArray) {
    var tmp$;
    if (this.discountFactor == null) {
      tmp$ = this.evalSeqNoDiscount_0(gameState, seq, playerId, scoreArray);
    } else {
      tmp$ = this.evalSeqDiscounted_0(gameState, seq, playerId, ensureNotNull(this.discountFactor), scoreArray);
    }
    return tmp$;
  };
  SimpleEvoAgent.prototype.evalSeqNoDiscount_0 = function (gameState, seq, playerId, scoreArray) {
    var tmp$, tmp$_0;
    var gameState_0 = gameState;
    var current = gameState_0.score();
    var actions = new Int32Array(2);
    var ix = 0;
    for (tmp$ = 0; tmp$ !== seq.length; ++tmp$) {
      var action = seq[tmp$];
      actions[playerId] = action;
      actions[1 - playerId | 0] = this.opponentModel.getAction_84v5ee$(gameState_0, 1 - playerId | 0);
      gameState_0 = gameState_0.next_q5rwfd$(actions);
      scoreArray[tmp$_0 = ix, ix = tmp$_0 + 1 | 0, tmp$_0] = gameState_0.score();
    }
    var delta = gameState_0.score() - current;
    return playerId === 0 ? delta : -delta;
  };
  SimpleEvoAgent.prototype.evalSeqDiscounted_0 = function (gameState, seq, playerId, discountFactor, scoreArray) {
    var tmp$, tmp$_0;
    var gameState_0 = gameState;
    var currentScore = gameState_0.score();
    var delta = 0.0;
    var discount = 1.0;
    var actions = new Int32Array(2);
    var ix = 0;
    for (tmp$ = 0; tmp$ !== seq.length; ++tmp$) {
      var action = seq[tmp$];
      actions[playerId] = action;
      actions[1 - playerId | 0] = this.opponentModel.getAction_84v5ee$(gameState_0, 1 - playerId | 0);
      gameState_0 = gameState_0.next_q5rwfd$(actions);
      var nextScore = gameState_0.score();
      var tickDelta = nextScore - currentScore;
      currentScore = nextScore;
      scoreArray[tmp$_0 = ix, ix = tmp$_0 + 1 | 0, tmp$_0] = currentScore;
      delta += tickDelta * discount;
      discount *= discountFactor;
    }
    return playerId === 0 ? delta : -delta;
  };
  SimpleEvoAgent.prototype.toString = function () {
    return 'SEA: ' + this.nEvals + ' : ' + this.sequenceLength + ' : ' + this.opponentModel;
  };
  SimpleEvoAgent.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    return this.getActions_84v5ee$(gameState, playerId)[0];
  };
  SimpleEvoAgent.prototype.getSolutionsCopy = function () {
    var x = ArrayList_init();
    x.addAll_brywnq$(this.solutions);
    return x;
  };
  SimpleEvoAgent.$metadata$ = {kind: Kind_CLASS, simpleName: 'SimpleEvoAgent', interfaces: [SimplePlayerInterface]};
  SimpleEvoAgent.prototype.component1 = function () {
    return this.flipAtLeastOneValue;
  };
  SimpleEvoAgent.prototype.component2 = function () {
    return this.probMutation;
  };
  SimpleEvoAgent.prototype.component3 = function () {
    return this.sequenceLength;
  };
  SimpleEvoAgent.prototype.component4 = function () {
    return this.nEvals;
  };
  SimpleEvoAgent.prototype.component5 = function () {
    return this.useShiftBuffer;
  };
  SimpleEvoAgent.prototype.component6 = function () {
    return this.useMutationTransducer;
  };
  SimpleEvoAgent.prototype.component7 = function () {
    return this.repeatProb;
  };
  SimpleEvoAgent.prototype.component8 = function () {
    return this.discountFactor;
  };
  SimpleEvoAgent.prototype.component9 = function () {
    return this.opponentModel;
  };
  SimpleEvoAgent.prototype.copy_wfmbgj$ = function (flipAtLeastOneValue, probMutation, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel) {
    return new SimpleEvoAgent(flipAtLeastOneValue === void 0 ? this.flipAtLeastOneValue : flipAtLeastOneValue, probMutation === void 0 ? this.probMutation : probMutation, sequenceLength === void 0 ? this.sequenceLength : sequenceLength, nEvals === void 0 ? this.nEvals : nEvals, useShiftBuffer === void 0 ? this.useShiftBuffer : useShiftBuffer, useMutationTransducer === void 0 ? this.useMutationTransducer : useMutationTransducer, repeatProb === void 0 ? this.repeatProb : repeatProb, discountFactor === void 0 ? this.discountFactor : discountFactor, opponentModel === void 0 ? this.opponentModel : opponentModel);
  };
  SimpleEvoAgent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.flipAtLeastOneValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.probMutation) | 0;
    result = result * 31 + Kotlin.hashCode(this.sequenceLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.nEvals) | 0;
    result = result * 31 + Kotlin.hashCode(this.useShiftBuffer) | 0;
    result = result * 31 + Kotlin.hashCode(this.useMutationTransducer) | 0;
    result = result * 31 + Kotlin.hashCode(this.repeatProb) | 0;
    result = result * 31 + Kotlin.hashCode(this.discountFactor) | 0;
    result = result * 31 + Kotlin.hashCode(this.opponentModel) | 0;
    return result;
  };
  SimpleEvoAgent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.flipAtLeastOneValue, other.flipAtLeastOneValue) && Kotlin.equals(this.probMutation, other.probMutation) && Kotlin.equals(this.sequenceLength, other.sequenceLength) && Kotlin.equals(this.nEvals, other.nEvals) && Kotlin.equals(this.useShiftBuffer, other.useShiftBuffer) && Kotlin.equals(this.useMutationTransducer, other.useMutationTransducer) && Kotlin.equals(this.repeatProb, other.repeatProb) && Kotlin.equals(this.discountFactor, other.discountFactor) && Kotlin.equals(this.opponentModel, other.opponentModel)))));
  };
  function GriddleControl() {
  }
  GriddleControl.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'GriddleControl', interfaces: []};
  function DefaultControl() {
  }
  DefaultControl.prototype.getSeed = function () {
    return L_1;
  };
  DefaultControl.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultControl', interfaces: [GriddleControl]};
  function GriddleController(control) {
    if (control === void 0)
      control = new DefaultControl();
    this.control = control;
    this.game = new GriddleGame(this.control);
    this.gv = new GriddleView(this.game.nCols, this.game.nRows);
    this.xgTemp = null;
    this.testData_0();
  }
  GriddleController.prototype.loadWords_mhpeer$ = function (words) {
    this.game.dict.addWords_mhpeer$(words);
  };
  GriddleController.prototype.testData_0 = function () {
    this.gv.setGrid_tpqcw7$(this.game.grid());
  };
  GriddleController.prototype.paint_vzjx8w$ = function (xg) {
    this.gv.paint_vzjx8w$(xg);
    this.xgTemp = xg;
  };
  GriddleController.prototype.handleMouseEvent_x4hb96$ = function (e) {
    if (e.t === XMouseEventType$Down_getInstance()) {
      var cell = this.gv.getGridCell_5lk9kw$(e.s);
      this.game.nextState_5u5kb7$(cell);
      this.gv.setData_e9vbbz$(this.game.grid(), unboxChar(this.game.current), this.game.score());
      var xg = this.xgTemp;
      if (xg != null) {
        this.gv.paint_vzjx8w$(xg);
      }}};
  GriddleController.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  GriddleController.prototype.newGame = function () {
    this.game.newGame();
    this.gv.setData_e9vbbz$(this.game.grid(), unboxChar(this.game.current), this.game.score());
    var xg = this.xgTemp;
    if (xg != null) {
      this.gv.paint_vzjx8w$(xg);
    }};
  GriddleController.$metadata$ = {kind: Kind_CLASS, simpleName: 'GriddleController', interfaces: [XApp]};
  function GriddleState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GriddleState_initFields() {
    GriddleState_initFields = function () {
    };
    GriddleState$Ready_instance = new GriddleState('Ready', 0);
    GriddleState$GameOn_instance = new GriddleState('GameOn', 1);
    GriddleState$GameOver_instance = new GriddleState('GameOver', 2);
  }
  var GriddleState$Ready_instance;
  function GriddleState$Ready_getInstance() {
    GriddleState_initFields();
    return GriddleState$Ready_instance;
  }
  var GriddleState$GameOn_instance;
  function GriddleState$GameOn_getInstance() {
    GriddleState_initFields();
    return GriddleState$GameOn_instance;
  }
  var GriddleState$GameOver_instance;
  function GriddleState$GameOver_getInstance() {
    GriddleState_initFields();
    return GriddleState$GameOver_instance;
  }
  GriddleState.$metadata$ = {kind: Kind_CLASS, simpleName: 'GriddleState', interfaces: [Enum]};
  function GriddleState$values() {
    return [GriddleState$Ready_getInstance(), GriddleState$GameOn_getInstance(), GriddleState$GameOver_getInstance()];
  }
  GriddleState.values = GriddleState$values;
  function GriddleState$valueOf(name) {
    switch (name) {
      case 'Ready':
        return GriddleState$Ready_getInstance();
      case 'GameOn':
        return GriddleState$GameOn_getInstance();
      case 'GameOver':
        return GriddleState$GameOver_getInstance();
      default:throwISE('No enum constant games.griddle.GriddleState.' + name);
    }
  }
  GriddleState.valueOf_61zpoe$ = GriddleState$valueOf;
  function GriddleGame(control) {
    GriddleGame$Companion_getInstance();
    if (control === void 0)
      control = new DefaultControl();
    this.control = control;
    this.dict = new TrieDict();
    this.gridScan = new GridScan();
    this.gridScan.dict = this.dict;
    println('Control seed = ' + toString(this.control.getSeed()));
    this.state = GriddleState$Ready_getInstance();
    this.nCols = 5;
    this.nRows = 5;
    this.a = this.emptyGrid();
    this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
    this.current = toBoxedChar(63);
    this.currentScore = 0;
    this.words = ArrayList_init();
    this.enableAI = true;
  }
  function GriddleGame$Companion() {
    GriddleGame$Companion_instance = this;
    this.vacant = toBoxedChar(32);
  }
  GriddleGame$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GriddleGame$Companion_instance = null;
  function GriddleGame$Companion_getInstance() {
    if (GriddleGame$Companion_instance === null) {
      new GriddleGame$Companion();
    }return GriddleGame$Companion_instance;
  }
  GriddleGame.prototype.emptyGrid = function () {
    var array = Array_0(this.nCols);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      var array_0 = charArray(this.nRows, null);
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        var value = unboxChar(GriddleGame$Companion_getInstance().vacant);
        array_0[i_0] = value;
      }
      array[i] = array_0;
    }
    return array;
  };
  GriddleGame.prototype.grid = function () {
    return this.a;
  };
  GriddleGame.prototype.nextState_5u5kb7$ = function (cell) {
    if (cell === void 0)
      cell = null;
    switch (this.state.name) {
      case 'Ready':
        var letter = unboxChar(this.deck.next());
        if (letter != null) {
          this.current = toBoxedChar(letter);
          this.state = GriddleState$GameOn_getInstance();
        } else {
          this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
        }

        break;
      case 'GameOn':
        var playedCell = cell;
        if (cell == null && this.enableAI) {
          var player = new MCPlayer(this.dict);
          playedCell = player.getAction_x2ua0m$(new LetterGridModel(this.a), this.deck, unboxChar(this.current));
        }
        if (playedCell != null && this.a[playedCell.x][playedCell.y] === unboxChar(GriddleGame$Companion_getInstance().vacant)) {
          this.placeLetter_svxxs3$(playedCell, unboxChar(this.current));
          var letter_0 = unboxChar(this.deck.next());
          if (letter_0 != null)
            this.current = toBoxedChar(letter_0);
          else {
            this.current = toBoxedChar(63);
            this.state = GriddleState$GameOver_getInstance();
          }
        }
        break;
      case 'GameOver':
        this.state = GriddleState$Ready_getInstance();
        this.a = this.emptyGrid();
        this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
        break;
    }
  };
  GriddleGame.prototype.placeLetter_svxxs3$ = function (cell, letter) {
    this.a[cell.x][cell.y] = letter;
    this.words = this.gridScan.findWords_lyd8co$(this.a);
    var tmp$;
    var sum = 0;
    tmp$ = this.words.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.score() | 0;
    }
    this.currentScore = sum;
  };
  GriddleGame.prototype.score = function () {
    return this.currentScore;
  };
  GriddleGame.prototype.calcScore_lyd8co$ = function (grid) {
    var tmp$;
    var sum = 0;
    tmp$ = this.gridScan.findWords_lyd8co$(grid).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.score() | 0;
    }
    return sum;
  };
  GriddleGame.prototype.newGame = function () {
    this.state = GriddleState$Ready_getInstance();
    this.a = this.emptyGrid();
    this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
    this.a = this.emptyGrid();
    this.deck = (new StatDeck()).getDeck_s8cxhz$(this.control.getSeed());
    this.current = toBoxedChar(63);
    this.currentScore = 0;
    println('Reset the game');
  };
  GriddleGame.$metadata$ = {kind: Kind_CLASS, simpleName: 'GriddleGame', interfaces: []};
  function GridCell(x, y) {
    this.x = x;
    this.y = y;
  }
  GridCell.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridCell', interfaces: []};
  GridCell.prototype.component1 = function () {
    return this.x;
  };
  GridCell.prototype.component2 = function () {
    return this.y;
  };
  GridCell.prototype.copy_vux9f0$ = function (x, y) {
    return new GridCell(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GridCell.prototype.toString = function () {
    return 'GridCell(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GridCell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GridCell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function GriddleView(nCols, nRows) {
    GriddleView$Companion_getInstance();
    this.nCols = nCols;
    this.nRows = nRows;
    this.count = 0;
    this.a = null;
    this.w = 1.0;
    this.h = 1.0;
    this.cellSize = 50.0;
    this.centre = new Vec2d();
    this.messageText = null;
    this.scoreText = new XText('', new Vec2d(), new TStyle(), new XStyle());
    this.message = '?';
    this.score = 0;
  }
  GriddleView.prototype.paint_vzjx8w$ = function (xg) {
    this.calcCellSize_vzjx8w$(xg);
    this.drawBackground_vzjx8w$(xg);
    this.draw_w2bsgl$(xg, this.a);
    this.drawMessage_rhlq3t$(xg, this.messageText);
    this.drawScore_qlxduy$(xg, this.scoreText);
  };
  GriddleView.prototype.calcCellSize_vzjx8w$ = function (xg) {
    this.centre = new Vec2d(xg.width() / 2, xg.height() / 2);
    var nc = this.nCols;
    var nr = this.nRows;
    if (xg.width() > xg.height()) {
      nc = nc + 1 | 0;
    } else {
      nr = nr + 1 | 0;
    }
    var colSize = xg.width() / nc;
    var rowSize = xg.height() / nr;
    this.cellSize = Math_0.min(colSize, rowSize);
    if (xg.width() > xg.height()) {
      var spare = xg.width() - this.nCols * this.cellSize;
      var cTile = new Vec2d(this.cellSize * this.nCols + spare / 2, 3 * xg.height() / 4);
      var cScore = new Vec2d(this.cellSize * this.nCols + spare / 2, xg.height() / 4);
      this.messageText = new XText(this.message, cTile, new TStyle(void 0, void 0, spare / 2), new XStyle());
      this.scoreText = new XText(this.score.toString(), cScore, new TStyle(void 0, void 0, spare / 2), new XStyle());
    } else {
      var spare_0 = xg.height() - this.nRows * this.cellSize;
      var cTile_0 = new Vec2d(xg.width() / 2, this.cellSize * this.nRows + 3 * spare_0 / 4);
      var cScore_0 = new Vec2d(xg.width() / 2, this.cellSize * this.nRows + spare_0 / 4);
      this.messageText = new XText(this.message, cTile_0, new TStyle(void 0, void 0, spare_0 / 2), new XStyle());
      this.scoreText = new XText(this.score.toString(), cScore_0, new TStyle(void 0, void 0, spare_0 / 2), new XStyle());
    }
  };
  GriddleView.prototype.drawScore_qlxduy$ = function (xg, scoreText) {
    scoreText.str = this.score.toString();
    xg.draw_dvdmun$(scoreText);
  };
  GriddleView.prototype.drawMessage_rhlq3t$ = function (xg, text) {
    if (text != null)
      xg.draw_dvdmun$(text);
  };
  GriddleView.prototype.setData_e9vbbz$ = function (a, ch, score) {
    if (score === void 0)
      score = 0;
    this.setGrid_tpqcw7$(a);
    this.setLetter_s8itvh$(ch);
    this.score = score;
  };
  GriddleView.prototype.setGrid_tpqcw7$ = function (a) {
    this.a = a;
  };
  GriddleView.prototype.setLetter_s8itvh$ = function (ch) {
    this.message = String.fromCharCode(ch);
  };
  GriddleView.prototype.drawBackground_vzjx8w$ = function (xg) {
    var style = new XStyle();
    var rect = new XRect(this.centre, xg.width(), xg.height(), style);
    style.fg = XColor$Companion_getInstance().black;
    xg.draw_dvdmun$(rect);
  };
  GriddleView.prototype.draw_w2bsgl$ = function (xg, a) {
    var tmp$, tmp$_0;
    if (a == null)
      return;
    var style = new XStyle();
    var tStyle = new TStyle(void 0, void 0, this.cellSize);
    var text = new XText(' ', this.centre, tStyle, style);
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.nRows;
      for (var j = 0; j < tmp$_0; j++) {
        var centre = new Vec2d((i + 0.5) * this.cellSize, (j + 0.5) * this.cellSize);
        (new LetterTile()).draw_pxm805$(xg, centre, this.cellSize, a[i][j]);
      }
    }
  };
  GriddleView.prototype.getGridCell_5lk9kw$ = function (s) {
    var col = numberToInt(s.x / this.cellSize);
    var row = numberToInt(s.y / this.cellSize);
    if (row < this.nRows && col < this.nCols)
      return new GridCell(col, row);
    else
      return null;
  };
  function GriddleView$Companion() {
    GriddleView$Companion_instance = this;
    this.frame = XColor$Companion_getInstance().blue;
  }
  GriddleView$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GriddleView$Companion_instance = null;
  function GriddleView$Companion_getInstance() {
    if (GriddleView$Companion_instance === null) {
      new GriddleView$Companion();
    }return GriddleView$Companion_instance;
  }
  GriddleView.$metadata$ = {kind: Kind_CLASS, simpleName: 'GriddleView', interfaces: []};
  function LetterTile() {
  }
  LetterTile.prototype.draw_pxm805$ = function (xg, centre, cellSize, ch) {
    var style = new XStyle();
    var rect = new XRect(centre, cellSize, cellSize, style);
    var tStyle = new TStyle(void 0, void 0, cellSize);
    var text = new XText(' ', centre, tStyle, style);
    style.fg = XColor$Companion_getInstance().red;
    style.stroke = true;
    style.lc = XColor$Companion_getInstance().gray;
    xg.draw_dvdmun$(rect);
    if (ch === 32) {
      style.stroke = true;
      style.lc = XColor$Companion_getInstance().blue;
      style.fg = XColor$Companion_getInstance().green;
      xg.draw_dvdmun$(rect);
    } else {
      text.str = String.fromCharCode(ch);
      text.p = rect.centre;
      xg.draw_dvdmun$(text);
    }
  };
  LetterTile.$metadata$ = {kind: Kind_CLASS, simpleName: 'LetterTile', interfaces: []};
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function LetterGridModel(g) {
    var array = Array_0(this.n());
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      var array_0 = charArray(this.n(), null);
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        var value = unboxChar(GriddleGame$Companion_getInstance().vacant);
        array_0[i_0] = value;
      }
      array[i] = array_0;
    }
    this.grid = array;
    var tmp$_1, tmp$_2;
    tmp$_1 = this.n();
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      tmp$_2 = this.n();
      for (var j = 0; j < tmp$_2; j++)
        this.grid[i_1][j] = g[i_1][j];
    }
  }
  LetterGridModel.prototype.vacancies = function () {
    var tmp$, tmp$_0;
    var va = ArrayList_init();
    tmp$ = this.n();
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.n();
      for (var j = 0; j < tmp$_0; j++)
        if (this.grid[i][j] === unboxChar(GriddleGame$Companion_getInstance().vacant))
          va.add_11rb$(new GridCell(i, j));
    }
    return va;
  };
  LetterGridModel.prototype.toString = function () {
    var tmp$, tmp$_0;
    var sb = StringBuilder_init();
    tmp$ = this.n();
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.n();
      for (var j = 0; j < tmp$_0; j++)
        sb.append_s8itvh$(this.grid[i][j]);
      sb.append_61zpoe$('\n');
    }
    return sb.toString();
  };
  LetterGridModel.prototype.isFull = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  LetterGridModel.prototype.n = function () {
    return 5;
  };
  LetterGridModel.$metadata$ = {kind: Kind_CLASS, simpleName: 'LetterGridModel', interfaces: []};
  function Player() {
  }
  Player.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Player', interfaces: []};
  function MCPlayer(dict) {
    this.dict = dict;
    this.sorted = ArrayList_init();
  }
  function MCPlayer$ScoredCell(cell, score) {
    this.cell = cell;
    this.score = score;
  }
  MCPlayer$ScoredCell.$metadata$ = {kind: Kind_CLASS, simpleName: 'ScoredCell', interfaces: []};
  MCPlayer$ScoredCell.prototype.component1 = function () {
    return this.cell;
  };
  MCPlayer$ScoredCell.prototype.component2 = function () {
    return this.score;
  };
  MCPlayer$ScoredCell.prototype.copy_bsu0le$ = function (cell, score) {
    return new MCPlayer$ScoredCell(cell === void 0 ? this.cell : cell, score === void 0 ? this.score : score);
  };
  MCPlayer$ScoredCell.prototype.toString = function () {
    return 'ScoredCell(cell=' + Kotlin.toString(this.cell) + (', score=' + Kotlin.toString(this.score)) + ')';
  };
  MCPlayer$ScoredCell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cell) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    return result;
  };
  MCPlayer$ScoredCell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cell, other.cell) && Kotlin.equals(this.score, other.score)))));
  };
  MCPlayer.prototype.swap_w2dapk$ = function (grid, a, b) {
    var tmp = grid[a.x][a.y];
    grid[a.x][a.y] = grid[b.x][b.y];
    grid[b.x][b.y] = tmp;
  };
  function MCPlayer$getAction$lambda(it) {
    return it.score;
  }
  MCPlayer.prototype.getAction_x2ua0m$ = function (model, deck, toPlace) {
    var tmp$, tmp$_0, tmp$_1;
    var scoreMap = HashMap_init();
    var vacancies = model.vacancies();
    var tmp$_2;
    tmp$_2 = vacancies.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var value = new StatSummary();
      scoreMap.put_xwzc9p$(element, value);
    }
    var nShuffles = 1000;
    var nScores = 0;
    for (var n = 0; n < nShuffles; n++) {
      var modelCopy = new LetterGridModel(model.grid);
      var first = vacancies.get_za3lpa$(0);
      modelCopy.grid[first.x][first.y] = toPlace;
      var deckCopy = deck.deepCopy();
      deckCopy.shuffleRemainingCards();
      tmp$ = vacancies.size;
      for (var i = 1; i < tmp$; i++) {
        var v = vacancies.get_za3lpa$(i);
        var next = unboxChar(deckCopy.next());
        if (next != null) {
          modelCopy.grid[v.x][v.y] = next;
        } else
          throw RuntimeException_init('Unexpected empty deck');
      }
      var gridScan = new GridScan();
      gridScan.dict = this.dict;
      tmp$_0 = vacancies.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        this.swap_w2dapk$(modelCopy.grid, vacancies.get_za3lpa$(0), vacancies.get_za3lpa$(i_0));
        var tmp$_3;
        var sum = 0;
        tmp$_3 = gridScan.findWords_lyd8co$(modelCopy.grid).iterator();
        while (tmp$_3.hasNext()) {
          var element_0 = tmp$_3.next();
          sum = sum + element_0.score() | 0;
        }
        var score = sum;
        nScores = nScores + 1 | 0;
        var ss = scoreMap.get_11rb$(vacancies.get_za3lpa$(i_0));
        if (ss != null)
          ss.add_3p81yu$(score);
        this.swap_w2dapk$(modelCopy.grid, vacancies.get_za3lpa$(0), vacancies.get_za3lpa$(i_0));
      }
    }
    var scoredList = ArrayList_init();
    tmp$_1 = scoreMap.entries.iterator();
    while (tmp$_1.hasNext()) {
      var tmp$_4 = tmp$_1.next();
      var k = tmp$_4.key;
      var v_0 = tmp$_4.value;
      scoredList.add_11rb$(new MCPlayer$ScoredCell(k, v_0.mean()));
    }
    var sorted = sortedWith(scoredList, new Comparator$ObjectLiteral(compareByDescending$lambda(MCPlayer$getAction$lambda)));
    var tmp$_5;
    tmp$_5 = sorted.iterator();
    while (tmp$_5.hasNext()) {
      var element_1 = tmp$_5.next();
      println(element_1.cell.toString() + '\t' + ' ' + element_1.score);
    }
    println(nScores.toString() + ' calls to score function');
    return sorted.get_za3lpa$(0).cell;
  };
  MCPlayer.$metadata$ = {kind: Kind_CLASS, simpleName: 'MCPlayer', interfaces: [Player]};
  function FastSampleDeck(cha, ix) {
    FastSampleDeck$Companion_getInstance();
    if (ix === void 0)
      ix = 0;
    this.cha = cha;
    this.ix = ix;
    this.rand = Random.Default;
  }
  function FastSampleDeck$Companion() {
    FastSampleDeck$Companion_instance = this;
    this.dealSize = 25;
  }
  FastSampleDeck$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var FastSampleDeck$Companion_instance = null;
  function FastSampleDeck$Companion_getInstance() {
    if (FastSampleDeck$Companion_instance === null) {
      new FastSampleDeck$Companion();
    }return FastSampleDeck$Companion_instance;
  }
  FastSampleDeck.prototype.deepCopy = function () {
    return new FastSampleDeck(this.cha.slice(), this.ix);
  };
  FastSampleDeck.prototype.next = function () {
    var tmp$;
    if (this.ix < FastSampleDeck$Companion_getInstance().dealSize) {
      return this.cha[tmp$ = this.ix, this.ix = tmp$ + 1 | 0, tmp$];
    } else
      return null;
  };
  FastSampleDeck.prototype.isEmpty = function () {
    return this.ix >= FastSampleDeck$Companion_getInstance().dealSize;
  };
  FastSampleDeck.prototype.shuffleRemainingCards = function () {
    var tmp$, tmp$_0;
    tmp$ = this.ix;
    tmp$_0 = FastSampleDeck$Companion_getInstance().dealSize;
    for (var i = tmp$; i < tmp$_0; i++) {
      var sw = i + this.rand.nextInt_za3lpa$(this.cha.length - i | 0) | 0;
      this.swap_lizitn$(this.cha, i, sw);
    }
  };
  FastSampleDeck.prototype.swap_lizitn$ = function (a, i, j) {
    var tmp = unboxChar(a[i]);
    a[i] = a[j];
    a[j] = toBoxedChar(tmp);
  };
  FastSampleDeck.$metadata$ = {kind: Kind_CLASS, simpleName: 'FastSampleDeck', interfaces: []};
  function StatDeck() {
    StatDeck$Companion_getInstance();
  }
  function StatDeck$Companion() {
    StatDeck$Companion_instance = this;
    this.rawDeck = copyToArray(split('SEAOI RLTN DUPM CYHGBKF WVZXJQ', [' ']));
    this.reps = new Int32Array([5, 4, 3, 2, 1]);
    this.nLetters = 26;
    this.deckString = this.makeCards();
  }
  StatDeck$Companion.prototype.makeCards = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var cha = ArrayList_init();
    var repIndex = 0;
    tmp$ = this.rawDeck;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var s = tmp$[tmp$_0];
      tmp$_1 = iterator(s.substring(0, s.length));
      while (tmp$_1.hasNext()) {
        var ch = unboxChar(tmp$_1.next());
        tmp$_2 = this.reps[repIndex];
        for (var i = 0; i < tmp$_2; i++) {
          cha.add_11rb$(toBoxedChar(ch));
        }
      }
      repIndex = repIndex + 1 | 0;
    }
    return cha;
  };
  StatDeck$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StatDeck$Companion_instance = null;
  function StatDeck$Companion_getInstance() {
    if (StatDeck$Companion_instance === null) {
      new StatDeck$Companion();
    }return StatDeck$Companion_instance;
  }
  StatDeck.prototype.getDeck_s8cxhz$ = function (seed) {
    if (seed === void 0)
      seed = L_1;
    var tmp$;
    var rand = seed.toNumber() < 0 ? Random.Default : Random_0(seed);
    var deck = StatDeck$Companion_getInstance().makeCards();
    println('Seed = ' + toString(seed));
    var nTries = 0;
    do {
      shuffle(deck, rand);
      var deal = copyToArray(deck.subList_vux9f0$(0, 25));
      if (ShuffleValidator_getInstance().accept_eh991n$(deal)) {
        return new FastSampleDeck(copyToArray(deck));
      }if ((tmp$ = nTries, nTries = tmp$ + 1 | 0, tmp$) > 100) {
        println('Returning a non-ideal deck after ' + nTries);
      }}
     while (true);
  };
  StatDeck.prototype.letterDistribution_chstmu$ = function (deck) {
    var tots = new Int32Array(StatDeck$Companion_getInstance().nLetters);
    for (var i = 0; i !== deck.size; ++i) {
      var tmp$;
      tmp$ = unboxChar(deck.get_za3lpa$(i)) - 65;
      tots[tmp$] = tots[tmp$] + 1 | 0;
    }
    return tots;
  };
  StatDeck.$metadata$ = {kind: Kind_CLASS, simpleName: 'StatDeck', interfaces: []};
  function ShuffleValidator() {
    ShuffleValidator_instance = this;
    this.vowels = 'AEIOU';
    this.vowelChars = this.vowels.substring(0, this.vowels.length);
    this.minVowels = 8;
    this.maxVowels = 12;
    this.maxPairs = 1;
  }
  ShuffleValidator.prototype.accept_eh991n$ = function (chars) {
    return this.consecutivePairs_eh991n$(chars) <= this.maxPairs && this.countVowels_eh991n$(chars) >= this.minVowels && this.countVowels_eh991n$(chars) <= this.maxVowels;
  };
  ShuffleValidator.prototype.consecutivePairs_eh991n$ = function (chars) {
    var nPairs = 0;
    for (var i = 1; i < chars.length; i++) {
      if (unboxChar(chars[i - 1 | 0]) === unboxChar(chars[i])) {
        nPairs = nPairs + 1 | 0;
      }}
    return nPairs;
  };
  ShuffleValidator.prototype.countVowels_eh991n$ = function (chars) {
    var tmp$;
    var tot = 0;
    for (tmp$ = 0; tmp$ !== chars.length; ++tmp$) {
      var ch = unboxChar(chars[tmp$]);
      if (this.isVowel_s8itvh$(ch)) {
        tot = tot + 1 | 0;
      }}
    return tot;
  };
  ShuffleValidator.prototype.isVowel_s8itvh$ = function (ch) {
    var tmp$;
    tmp$ = iterator(this.vowelChars);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if (c === ch)
        return true;
    }
    return false;
  };
  ShuffleValidator.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ShuffleValidator', interfaces: []};
  var ShuffleValidator_instance = null;
  function ShuffleValidator_getInstance() {
    if (ShuffleValidator_instance === null) {
      new ShuffleValidator();
    }return ShuffleValidator_instance;
  }
  function GridScan() {
    GridScan$Companion_getInstance();
    this.dict = new TrieDict();
  }
  function GridScan$Companion() {
    GridScan$Companion_instance = this;
    this.minLen = 2;
    this.maxLen = 5;
  }
  GridScan$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GridScan$Companion_instance = null;
  function GridScan$Companion_getInstance() {
    if (GridScan$Companion_instance === null) {
      new GridScan$Companion();
    }return GridScan$Companion_instance;
  }
  GridScan.prototype.findWords_lyd8co$ = function (a) {
    var tmp$, tmp$_0;
    var words = ArrayList_init();
    tmp$ = Dir$values();
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var dir = tmp$[tmp$_0];
      var origin = new GridCell(0, 0);
      for (var i = 0; i !== a.length; ++i) {
        var start = dir.stepBy_x0di76$(origin, i);
        this.lineScan_8mnjnf$(a, start, dir.perp(), words);
      }
    }
    return words;
  };
  GridScan.prototype.lineScan_8mnjnf$ = function (a, lineStart, dir, words) {
    var tmp$;
    tmp$ = a.length - GridScan$Companion_getInstance().minLen | 0;
    for (var offset = 0; offset <= tmp$; offset++) {
      var tn = this.dict.root;
      var cur = dir.stepBy_x0di76$(lineStart, offset);
      var wordStart = cur;
      var i = 0;
      var max = GridScan$Companion_getInstance().maxLen - offset | 0;
      var sb = StringBuilder_init();
      while (tn != null && i < max) {
        tn = tn.follow_s8itvh$(a[cur.x][cur.y]);
        sb.append_s8itvh$(a[cur.x][cur.y]);
        if (tn != null && tn.isWord) {
          var word = new GridWord(sb.toString(), wordStart, dir);
          words.add_11rb$(word);
        }i = i + 1 | 0;
        cur = dir.step_23phzo$(cur);
      }
    }
  };
  GridScan.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridScan', interfaces: []};
  var GridUtil$Companion_instance = null;
  function Dir(name, ordinal, dx, dy) {
    Enum.call(this);
    this.dx = dx;
    this.dy = dy;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Dir_initFields() {
    Dir_initFields = function () {
    };
    Dir$H_instance = new Dir('H', 0, 1, 0);
    Dir$V_instance = new Dir('V', 1, 0, 1);
  }
  var Dir$H_instance;
  function Dir$H_getInstance() {
    Dir_initFields();
    return Dir$H_instance;
  }
  var Dir$V_instance;
  function Dir$V_getInstance() {
    Dir_initFields();
    return Dir$V_instance;
  }
  Dir.prototype.step_23phzo$ = function (cell) {
    return new GridCell(cell.x + this.dx | 0, cell.y + this.dy | 0);
  };
  Dir.prototype.stepBy_x0di76$ = function (cell, n) {
    return new GridCell(cell.x + Kotlin.imul(n, this.dx) | 0, cell.y + Kotlin.imul(n, this.dy) | 0);
  };
  Dir.prototype.perp = function () {
    return this === Dir$H_getInstance() ? Dir$V_getInstance() : Dir$H_getInstance();
  };
  Dir.$metadata$ = {kind: Kind_CLASS, simpleName: 'Dir', interfaces: [Enum]};
  function Dir$values() {
    return [Dir$H_getInstance(), Dir$V_getInstance()];
  }
  Dir.values = Dir$values;
  function Dir$valueOf(name) {
    switch (name) {
      case 'H':
        return Dir$H_getInstance();
      case 'V':
        return Dir$V_getInstance();
      default:throwISE('No enum constant games.griddle.words.Dir.' + name);
    }
  }
  Dir.valueOf_61zpoe$ = Dir$valueOf;
  function GridWord(s, start, dir) {
    GridWord$Companion_getInstance();
    this.s = s;
    this.start = start;
    this.dir = dir;
  }
  GridWord.prototype.score = function () {
    return GridWord$Companion_getInstance().scores[this.s.length];
  };
  GridWord.prototype.toString = function () {
    return this.s + ' : ' + toString(this.start) + ' : ' + toString(this.dir) + ' : ' + toString(this.score());
  };
  function GridWord$Companion() {
    GridWord$Companion_instance = this;
    this.scores = new Int32Array([0, 0, 1, 3, 7, 10, 15]);
  }
  GridWord$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GridWord$Companion_instance = null;
  function GridWord$Companion_getInstance() {
    if (GridWord$Companion_instance === null) {
      new GridWord$Companion();
    }return GridWord$Companion_instance;
  }
  GridWord.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridWord', interfaces: []};
  function TrieDict() {
    this.root = null;
    this.nWords = 0;
    this.root = new TrieNode();
  }
  TrieDict.prototype.addWord_61zpoe$ = function (s) {
    var tmp$;
    var tn = this.root;
    tmp$ = iterator(s.substring(0, s.length));
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      tn = tn.add_s8itvh$(ch);
    }
    if (!tn.isWord) {
      tn.isWord = true;
      this.nWords = this.nWords + 1 | 0;
    }};
  TrieDict.prototype.addWords_mhpeer$ = function (words) {
    var tmp$;
    tmp$ = words.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      this.addWord_61zpoe$(trim(Kotlin.isCharSequence(tmp$_0 = element) ? tmp$_0 : throwCCE()).toString());
    }
  };
  TrieDict.prototype.testWord_61zpoe$ = function (s) {
    var chars = s.substring(0, s.length);
    var ix = 0;
    var tn = this.root;
    while (tn != null && ix < chars.length) {
      tn = tn.follow_s8itvh$(chars.charCodeAt(ix));
      if (tn != null)
        println(String.fromCharCode(chars.charCodeAt(ix)) + '\t ' + toString(tn.isWord));
      ix = ix + 1 | 0;
    }
  };
  TrieDict.$metadata$ = {kind: Kind_CLASS, simpleName: 'TrieDict', interfaces: []};
  function TrieNode() {
    TrieNode$Companion_getInstance();
    this.isWord = false;
    this.next = null;
  }
  TrieNode.prototype.rangeCheck_s8itvh$ = function (ch) {
    if (ch < unboxChar(TrieNode$Companion_getInstance().first) || ch > unboxChar(TrieNode$Companion_getInstance().last))
      throw RuntimeException_init('TrieNode char out of range: ' + String.fromCharCode(ch));
  };
  TrieNode.prototype.outOfRange_s8itvh$ = function (ch) {
    return ch < unboxChar(TrieNode$Companion_getInstance().first) || ch > unboxChar(TrieNode$Companion_getInstance().last);
  };
  TrieNode.prototype.follow_s8itvh$ = function (ch) {
    if (this.next == null)
      return null;
    if (this.outOfRange_s8itvh$(ch))
      return null;
    var ix = ch - 65;
    return ensureNotNull(this.next)[ix];
  };
  TrieNode.prototype.add_s8itvh$ = function (ch) {
    this.rangeCheck_s8itvh$(ch);
    var ix = ch - 65;
    if (this.next == null)
      this.next = Kotlin.newArray(TrieNode$Companion_getInstance().range, null);
    if (ensureNotNull(this.next)[ix] == null)
      ensureNotNull(this.next)[ix] = new TrieNode();
    return ensureNotNull(ensureNotNull(this.next)[ix]);
  };
  function TrieNode$Companion() {
    TrieNode$Companion_instance = this;
    this.first = toBoxedChar(65);
    this.last = toBoxedChar(90);
    this.range = 1 + (unboxChar(this.last) | 0) - (unboxChar(this.first) | 0) | 0;
  }
  TrieNode$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TrieNode$Companion_instance = null;
  function TrieNode$Companion_getInstance() {
    if (TrieNode$Companion_instance === null) {
      new TrieNode$Companion();
    }return TrieNode$Companion_instance;
  }
  TrieNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'TrieNode', interfaces: []};
  function TetrisController() {
    this.tg = null;
    this.keyController = new TetrisKeyController();
    this.agent = this.keyController;
    this.nCols = 10;
    this.nRows = 20;
    this.tv = new TetrisView(this.nCols, this.nRows);
    this.setModelParams_0();
    this.tg = new TetrisGame();
  }
  TetrisController.prototype.paint_vzjx8w$ = function (xg) {
    if (this.tg.isTerminal()) {
      this.tg = new TetrisGame();
    } else {
      var action = this.agent.getAction_84v5ee$(this.tg.copy(), 0);
      this.tg.next_q5rwfd$(new Int32Array([action]));
      var score = this.tg.score();
      var message = this.tg.nTicks().toString() + '\t' + ' ' + score + '\t' + ' ' + action + '\t' + ' ' + this.tg.totalTicks().toString() + '\t' + ' ' + this.tg.subGoal();
    }
    this.tv.setData_avu7ag$(this.tg.tm.a, this.tg.tm.tetronSprite, this.tg.tm.getGhost());
    this.tv.paint_vzjx8w$(xg);
  };
  TetrisController.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  TetrisController.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    this.keyController.handleKeyEvent_wtf8cg$(e);
  };
  TetrisController.prototype.setModelParams_0 = function () {
    TetrisModel$Companion_getInstance().defaultCols = this.nCols;
    TetrisModel$Companion_getInstance().defaultRows = this.nRows;
    TetrisModel$Companion_getInstance().includeColumnDiffs = false;
    TetrisModel$Companion_getInstance().gameOverPenalty = 0;
    TetrisModel$Companion_getInstance().cyclicBlockType = false;
    TetrisModel$Companion_getInstance().randomInitialRotation = true;
    TetrisModel$Companion_getInstance().randomShapeColours = false;
    TetrisModel$Companion_getInstance().gameOverPenalty = 0;
    TetrisModel$Companion_getInstance().dropSkip = 50;
  };
  TetrisController.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetrisController', interfaces: [XApp]};
  function TetrisKeyController() {
    this.currentKey = null;
    this.keyMap = hashMapOf([to(XKeyMap$Companion_getInstance().left, Actions$Left_getInstance().ordinal), to(XKeyMap$Companion_getInstance().up, Actions$Rotate_getInstance().ordinal), to(XKeyMap$Companion_getInstance().right, Actions$Right_getInstance().ordinal), to(XKeyMap$Companion_getInstance().down, Actions$Down_getInstance().ordinal), to(XKeyMap$Companion_getInstance().space, Actions$Drop_getInstance().ordinal)]);
  }
  TetrisKeyController.prototype.handleKeyEvent_wtf8cg$ = function (e) {
    println(e);
    if (e.t === XKeyEventType$Pressed_getInstance() || e.t === XKeyEventType$Down_getInstance()) {
      this.currentKey = e.keyCode;
      println('Set current key to ' + toString(this.currentKey));
    } else if (e.t === XKeyEventType$Released_getInstance()) {
      this.currentKey = null;
    }};
  TetrisKeyController.prototype.getAgentType = function () {
    return 'Tetris Key Controller';
  };
  TetrisKeyController.prototype.getAction_84v5ee$ = function (gameState, playerId) {
    var key = this.currentKey;
    if (key == null)
      return Actions$DoNothing_getInstance().ordinal;
    else {
      var proposed = this.keyMap.get_11rb$(key);
      println('Returning proposed action: ' + toString(proposed));
      this.currentKey = null;
      return proposed == null ? Actions$DoNothing_getInstance().ordinal : proposed;
    }
  };
  TetrisKeyController.prototype.reset = function () {
    return this;
  };
  TetrisKeyController.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetrisKeyController', interfaces: [SimplePlayerInterface]};
  function Actions(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Actions_initFields() {
    Actions_initFields = function () {
    };
    Actions$DoNothing_instance = new Actions('DoNothing', 0);
    Actions$Left_instance = new Actions('Left', 1);
    Actions$Right_instance = new Actions('Right', 2);
    Actions$Rotate_instance = new Actions('Rotate', 3);
    Actions$Down_instance = new Actions('Down', 4);
    Actions$Drop_instance = new Actions('Drop', 5);
  }
  var Actions$DoNothing_instance;
  function Actions$DoNothing_getInstance() {
    Actions_initFields();
    return Actions$DoNothing_instance;
  }
  var Actions$Left_instance;
  function Actions$Left_getInstance() {
    Actions_initFields();
    return Actions$Left_instance;
  }
  var Actions$Right_instance;
  function Actions$Right_getInstance() {
    Actions_initFields();
    return Actions$Right_instance;
  }
  var Actions$Rotate_instance;
  function Actions$Rotate_getInstance() {
    Actions_initFields();
    return Actions$Rotate_instance;
  }
  var Actions$Down_instance;
  function Actions$Down_getInstance() {
    Actions_initFields();
    return Actions$Down_instance;
  }
  var Actions$Drop_instance;
  function Actions$Drop_getInstance() {
    Actions_initFields();
    return Actions$Drop_instance;
  }
  Actions.$metadata$ = {kind: Kind_CLASS, simpleName: 'Actions', interfaces: [Enum]};
  function Actions$values() {
    return [Actions$DoNothing_getInstance(), Actions$Left_getInstance(), Actions$Right_getInstance(), Actions$Rotate_getInstance(), Actions$Down_getInstance(), Actions$Drop_getInstance()];
  }
  Actions.values = Actions$values;
  function Actions$valueOf(name) {
    switch (name) {
      case 'DoNothing':
        return Actions$DoNothing_getInstance();
      case 'Left':
        return Actions$Left_getInstance();
      case 'Right':
        return Actions$Right_getInstance();
      case 'Rotate':
        return Actions$Rotate_getInstance();
      case 'Down':
        return Actions$Down_getInstance();
      case 'Drop':
        return Actions$Drop_getInstance();
      default:throwISE('No enum constant games.tetris.Actions.' + name);
    }
  }
  Actions.valueOf_61zpoe$ = Actions$valueOf;
  function TetrisGame() {
    TetrisGame$Companion_getInstance();
    this.nInternalTicks_0 = 0;
    this.tm = new TetrisModel();
    this.justLanded = false;
  }
  function TetrisGame$Companion() {
    TetrisGame$Companion_instance = this;
    this.nTotalTicks = L0;
    this.xLeft = -1;
    this.xRight = 1;
    this.down = 1;
    this.cyclicBlockType = true;
  }
  TetrisGame$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TetrisGame$Companion_instance = null;
  function TetrisGame$Companion_getInstance() {
    if (TetrisGame$Companion_instance === null) {
      new TetrisGame$Companion();
    }return TetrisGame$Companion_instance;
  }
  TetrisGame.prototype.totalTicks = function () {
    return TetrisGame$Companion_getInstance().nTotalTicks;
  };
  TetrisGame.prototype.resetTotalTicks = function () {
    TetrisGame$Companion_getInstance().nTotalTicks = L0;
  };
  TetrisGame.prototype.randomInitialState = function () {
    return this;
  };
  TetrisGame.prototype.copy = function () {
    var tg = new TetrisGame();
    tg.tm = this.tm.copy();
    tg.nInternalTicks_0 = this.nInternalTicks_0;
    return tg;
  };
  TetrisGame.prototype.next_q5rwfd$ = function (actions) {
    var tmp$;
    this.takeAction_za3lpa$(actions[0]);
    if (TetrisModel$Companion_getInstance().dropSkip > 0 && this.nInternalTicks_0 % TetrisModel$Companion_getInstance().dropSkip === 0)
      this.takeAction_za3lpa$(Actions$Down_getInstance().ordinal);
    this.nInternalTicks_0 = this.nInternalTicks_0 + 1 | 0;
    tmp$ = TetrisGame$Companion_getInstance().nTotalTicks;
    TetrisGame$Companion_getInstance().nTotalTicks = tmp$.inc();
    return this;
  };
  TetrisGame.prototype.takeAction_za3lpa$ = function (action) {
    this.justLanded = false;
    if (action !== Actions$DoNothing_getInstance().ordinal)
      if (action === Actions$Left_getInstance().ordinal)
        this.tm.move_vux9f0$(TetrisGame$Companion_getInstance().xLeft, 0);
      else if (action === Actions$Right_getInstance().ordinal)
        this.tm.move_vux9f0$(TetrisGame$Companion_getInstance().xRight, 0);
      else if (action === Actions$Rotate_getInstance().ordinal)
        this.tm.rotate();
      else if (action === Actions$Down_getInstance().ordinal) {
        if (!this.tm.move_vux9f0$(0, TetrisGame$Companion_getInstance().down)) {
          this.tm.place();
          this.justLanded = true;
          this.tm.checkRows();
          this.tm.newShape();
        }} else if (action === Actions$Drop_getInstance().ordinal)
        this.dropDown_0();
  };
  TetrisGame.prototype.subGoal = function () {
    return this.justLanded;
  };
  TetrisGame.prototype.dropDown_0 = function () {
    while (this.tm.move_vux9f0$(0, TetrisGame$Companion_getInstance().down))
    ;
    this.tm.place();
    this.justLanded = true;
    this.tm.checkRows();
    this.tm.newShape();
  };
  TetrisGame.prototype.nActions = function () {
    return Actions$values().length;
  };
  TetrisGame.prototype.score = function () {
    var penalty = this.tm.gameOn() ? 0 : TetrisModel$Companion_getInstance().gameOverPenalty;
    var colDiff = TetrisModel$Companion_getInstance().includeColumnDiffs ? (new ColHeightDiff()).value_tsk8so$(this) : 0.0;
    return this.tm.score - penalty + colDiff;
  };
  TetrisGame.prototype.isTerminal = function () {
    return !this.tm.gameOn();
  };
  TetrisGame.prototype.nTicks = function () {
    return this.nInternalTicks_0;
  };
  TetrisGame.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetrisGame', interfaces: [ExtendedAbstractGameState]};
  function TetrisModel(nCols, nRows) {
    TetrisModel$Companion_getInstance();
    if (nCols === void 0)
      nCols = TetrisModel$Companion_getInstance().defaultCols;
    if (nRows === void 0)
      nRows = TetrisModel$Companion_getInstance().defaultRows;
    this.nCols = nCols;
    this.nRows = nRows;
    var array = Array_0(this.nCols);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = new Int32Array(this.nRows);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = TetrisConstants_getInstance().BG;
      }
      array[i] = array_0;
    }
    this.a = array;
    this.score = 0;
    this.tetronSprite = null;
    this.blockCount = 0;
    if (this.tetronSprite == null)
      this.newShape();
  }
  TetrisModel.prototype.copy = function () {
    var tmp$, tmp$_0, tmp$_1;
    var tm = new TetrisModel(this.nCols, this.nRows);
    tm.score = this.score;
    tm.blockCount = this.blockCount;
    tm.tetronSprite = (tmp$ = this.tetronSprite) != null ? tmp$.copy_4qozqa$() : null;
    tmp$_0 = this.nCols;
    for (var i = 0; i < tmp$_0; i++) {
      tmp$_1 = this.nRows;
      for (var j = 0; j < tmp$_1; j++)
        tm.a[i][j] = this.a[i][j];
    }
    return tm;
  };
  TetrisModel.prototype.checkRows = function () {
    var flag = false;
    var r = 0;
    while (r < this.nRows) {
      if (this.full_0(r)) {
        flag = true;
        this.score = this.score + TetrisModel$Companion_getInstance().baseReward | 0;
        this.clearRow_0(r);
        this.scroll_0(r);
        r = r - 1 | 0;
      }r = r + 1 | 0;
    }
    return flag;
  };
  TetrisModel.prototype.full_0 = function (r) {
    var tmp$;
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      if (this.a[i][r] === TetrisConstants_getInstance().BG) {
        return false;
      }}
    return true;
  };
  TetrisModel.prototype.clearRow_0 = function (r) {
    var tmp$;
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      this.a[i][r] = TetrisConstants_getInstance().BG;
    }
  };
  TetrisModel.prototype.scroll_0 = function (sr) {
    var tmp$;
    for (var r = sr; r >= 1; r--) {
      tmp$ = this.nCols;
      for (var c = 0; c < tmp$; c++)
        this.a[c][r] = this.a[c][r - 1 | 0];
    }
  };
  TetrisModel.prototype.move_vux9f0$ = function (dx, dy) {
    var tmp$;
    var ts = this.tetronSprite;
    if (ts != null) {
      tmp$ = ts.move_fwq3ux$(dx, dy, this.a);
    } else
      tmp$ = false;
    return tmp$;
  };
  TetrisModel.prototype.rotate = function () {
    var ts = this.tetronSprite;
    if (ts != null)
      ts.rotate_ytlutl$(this.a);
  };
  TetrisModel.prototype.place = function () {
    var ts = this.tetronSprite;
    if (ts != null) {
      ts.place_ytlutl$(this.a);
    }};
  TetrisModel.prototype.gameOn = function () {
    var ts = this.tetronSprite;
    return ts != null && ts.valid_ytlutl$(this.a);
  };
  TetrisModel.prototype.newShape = function () {
    var tmp$;
    if (TetrisModel$Companion_getInstance().cyclicBlockType) {
      tmp$ = this.blockCount % Tetrons_getInstance().shapes.length;
    } else {
      tmp$ = TetrisModel$Companion_getInstance().rand.nextInt_za3lpa$(Tetrons_getInstance().shapes.length);
    }
    var tType = tmp$;
    this.blockCount = this.blockCount + 1 | 0;
    var tColor = TetrisModel$Companion_getInstance().randomShapeColours ? TetrisModel$Companion_getInstance().rand.nextInt_za3lpa$(Tetrons_getInstance().shapes.length) : tType;
    var x = (this.nCols / 2 | 0) - 1 | 0;
    var y = 2;
    var rotation = TetrisModel$Companion_getInstance().randomInitialRotation ? TetrisModel$Companion_getInstance().rand.nextInt_za3lpa$(4) : 0;
    var ts = new TetronSprite(x, y, rotation, tType, tColor);
    if (ts.valid_ytlutl$(this.a)) {
      this.tetronSprite = ts;
      return true;
    } else {
      this.tetronSprite = null;
      return false;
    }
  };
  TetrisModel.prototype.getGhost = function () {
    var ts = this.tetronSprite;
    if (ts != null) {
      var ghost = ts.copy_4qozqa$();
      while (ghost.move_fwq3ux$(0, 1, this.a))
      ;
      return ghost;
    } else
      return null;
  };
  function TetrisModel$Companion() {
    TetrisModel$Companion_instance = this;
    this.rand = Random.Default;
    this.baseReward = 100;
    this.heightFactor = 100;
    this.defaultRows = 24;
    this.defaultCols = 8;
    this.randomShapeColours = false;
    this.cyclicBlockType = true;
    this.randomInitialRotation = false;
    this.includeColumnDiffs = true;
    this.gameOverPenalty = 0;
    this.dropSkip = 10;
  }
  TetrisModel$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TetrisModel$Companion_instance = null;
  function TetrisModel$Companion_getInstance() {
    if (TetrisModel$Companion_instance === null) {
      new TetrisModel$Companion();
    }return TetrisModel$Companion_instance;
  }
  TetrisModel.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetrisModel', interfaces: []};
  function TetrisConstants() {
    TetrisConstants_instance = this;
    this.BG = Tetrons_getInstance().shapes.length;
    this.baseReward = 100;
    this.heightFactor = 100;
    this.defaultRows = 30;
    this.defaultCols = 60;
  }
  TetrisConstants.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TetrisConstants', interfaces: []};
  var TetrisConstants_instance = null;
  function TetrisConstants_getInstance() {
    if (TetrisConstants_instance === null) {
      new TetrisConstants();
    }return TetrisConstants_instance;
  }
  var TetrisValueFunction$Companion_instance = null;
  function ColHeightDiff() {
    ColHeightDiff$Companion_getInstance();
  }
  function ColHeightDiff$Companion() {
    ColHeightDiff$Companion_instance = this;
    this.rand = Random.Default;
    this.eps = 1.0E-10;
  }
  ColHeightDiff$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ColHeightDiff$Companion_instance = null;
  function ColHeightDiff$Companion_getInstance() {
    if (ColHeightDiff$Companion_instance === null) {
      new ColHeightDiff$Companion();
    }return ColHeightDiff$Companion_instance;
  }
  ColHeightDiff.prototype.value_tsk8so$ = function (gameState) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var noise = ColHeightDiff$Companion_getInstance().rand.nextDouble() * ColHeightDiff$Companion_getInstance().eps;
    if (!Kotlin.isType(gameState, TetrisGame))
      return noise;
    var a = gameState.tm.a;
    var tm = (Kotlin.isType(tmp$ = gameState, TetrisGame) ? tmp$ : throwCCE()).tm;
    var array = Array_0(a.length);
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_3; i++) {
      array[i] = tm.nRows;
    }
    var colHeights = array;
    tmp$_0 = tm.nCols;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      tmp$_1 = tm.nRows;
      for (var j = 0; j < tmp$_1; j++) {
        if (a[i_0][j] !== TetrisConstants_getInstance().BG) {
          var a_0 = colHeights[i_0];
          colHeights[i_0] = Math_0.min(a_0, j);
        }}
    }
    var hScore = 0.0;
    tmp$_2 = tm.nCols;
    for (var i_1 = 1; i_1 < tmp$_2; i_1++)
      hScore += abs(colHeights[i_1 - 1 | 0] - colHeights[i_1] | 0);
    return -hScore;
  };
  ColHeightDiff.$metadata$ = {kind: Kind_CLASS, simpleName: 'ColHeightDiff', interfaces: [AbstractValueFunction]};
  function TetrisView(nCols, nRows) {
    TetrisView$Companion_getInstance();
    this.nCols = nCols;
    this.nRows = nRows;
    this.count = 0;
    this.topVisibleRow = 0;
    this.shape = null;
    this.ghostShape = null;
    this.a = null;
    this.w = 1.0;
    this.h = 1.0;
    this.cellSize = 20.0;
    this.centre = new Vec2d();
  }
  TetrisView.prototype.paint_vzjx8w$ = function (xg) {
    this.calcCellSize_vzjx8w$(xg);
    this.drawBackground_vzjx8w$(xg);
    this.draw_4kfqt8$(xg, this.a);
    this.drawGhostShape_bjye00$(xg, this.ghostShape);
    this.drawShape_bjye00$(xg, this.shape);
  };
  TetrisView.prototype.calcCellSize_vzjx8w$ = function (xg) {
    this.centre = new Vec2d(xg.width() / 2, xg.height() / 2);
    var colSize = xg.width() / this.nCols;
    var rowSize = xg.height() / this.nRows;
    this.cellSize = Math_0.min(colSize, rowSize);
  };
  TetrisView.prototype.handleMouseEvent_x4hb96$ = function (e) {
  };
  TetrisView.prototype.handleKeyEvent_wtf8cg$ = function (e) {
  };
  TetrisView.prototype.setData_avu7ag$ = function (a, shape, ghostShape) {
    this.a = a;
    this.shape = shape;
    this.ghostShape = ghostShape;
  };
  TetrisView.prototype.drawBackground_vzjx8w$ = function (xg) {
    var style = new XStyle();
    var rect = new XRect(this.centre, xg.width(), xg.height(), style);
    style.fg = XColor$Companion_getInstance().black;
    xg.draw_dvdmun$(rect);
  };
  TetrisView.prototype.draw_4kfqt8$ = function (xg, a) {
    var tmp$, tmp$_0, tmp$_1;
    if (a == null)
      return;
    var style = new XStyle();
    var rect = new XRect(this.centre, this.cellSize, this.cellSize, style);
    tmp$ = this.nCols;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.topVisibleRow;
      tmp$_1 = this.nRows;
      for (var j = tmp$_0; j < tmp$_1; j++) {
        style.fg = TetrisView$Companion_getInstance().colors[a[i][j]];
        style.stroke = true;
        style.lc = XColor$Companion_getInstance().gray;
        rect.centre = new Vec2d((i + 0.5) * this.cellSize, (j + 0.5) * this.cellSize);
        xg.draw_dvdmun$(rect);
        if (a[i][j] === TetrisView$Companion_getInstance().BG) {
          style.stroke = true;
          style.lc = XColor$Companion_getInstance().blue;
          style.fg = TetrisView$Companion_getInstance().colors[TetrisView$Companion_getInstance().BG];
          xg.draw_dvdmun$(rect);
        }}
    }
  };
  TetrisView.prototype.drawShape_bjye00$ = function (xg, ts) {
    var tmp$;
    if (ts == null)
      return;
    var style = new XStyle();
    var rect = new XRect(this.centre, this.cellSize, this.cellSize, style);
    style.fg = TetrisView$Companion_getInstance().colors[ts.color];
    style.lc = XColor$Companion_getInstance().black.copy_7b5o5w$(void 0, void 0, void 0, 0.5);
    style.stroke = true;
    style.lineWidth = 2.0;
    tmp$ = ts.getCells().iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      rect.centre = new Vec2d((cell.x + 0.5) * this.cellSize, (cell.y + 0.5) * this.cellSize);
      xg.draw_dvdmun$(rect);
    }
  };
  TetrisView.prototype.drawGhostShape_bjye00$ = function (xg, ts) {
    var tmp$;
    if (ts == null)
      return;
    var style = new XStyle();
    var rect = new XRect(this.centre, this.cellSize, this.cellSize, style);
    style.fg = XColor$Companion_getInstance().gray;
    style.lc = XColor$Companion_getInstance().white;
    style.stroke = true;
    tmp$ = ts.getCells().iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      rect.centre = new Vec2d((cell.x + 0.5) * this.cellSize, (cell.y + 0.5) * this.cellSize);
      xg.draw_dvdmun$(rect);
    }
  };
  function TetrisView$Companion() {
    TetrisView$Companion_instance = this;
    this.colors = [XColor$Companion_getInstance().green, XColor$Companion_getInstance().blue, XColor$Companion_getInstance().red, XColor$Companion_getInstance().yellow, XColor$Companion_getInstance().magenta, XColor$Companion_getInstance().pink, XColor$Companion_getInstance().cyan, XColor$Companion_getInstance().black, XColor$Companion_getInstance().gray];
    this.cellSize = 20;
    this.frame = XColor$Companion_getInstance().blue;
    this.BG = 7;
  }
  TetrisView$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var TetrisView$Companion_instance = null;
  function TetrisView$Companion_getInstance() {
    if (TetrisView$Companion_instance === null) {
      new TetrisView$Companion();
    }return TetrisView$Companion_instance;
  }
  TetrisView.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetrisView', interfaces: [XApp]};
  function Tetrons() {
    Tetrons_instance = this;
    this.square = [[new Cell(0, 0), new Cell(0, 1), new Cell(1, 0), new Cell(1, 1)]];
    this.tee = [[new Cell(0, 0), new Cell(1, 0), new Cell(0, -1), new Cell(0, 1)], [new Cell(0, 0), new Cell(-1, 0), new Cell(1, 0), new Cell(0, 1)], [new Cell(0, 0), new Cell(-1, 0), new Cell(0, -1), new Cell(0, 1)], [new Cell(0, 0), new Cell(1, 0), new Cell(0, -1), new Cell(-1, 0)]];
    this.straight = [[new Cell(0, -1), new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(2, 0)]];
    this.lCorn = [[new Cell(1, -1), new Cell(0, -1), new Cell(0, 0), new Cell(0, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(1, 1)], [new Cell(0, 1), new Cell(1, -1), new Cell(1, 0), new Cell(1, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(-1, -1)]];
    this.rCorn = [[new Cell(1, 1), new Cell(0, -1), new Cell(0, 0), new Cell(0, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(-1, 1)], [new Cell(0, -1), new Cell(1, -1), new Cell(1, 0), new Cell(1, 1)], [new Cell(-1, 0), new Cell(0, 0), new Cell(1, 0), new Cell(1, -1)]];
    this.lSkew = [[new Cell(-1, 1), new Cell(0, 1), new Cell(0, 0), new Cell(1, 0)], [new Cell(0, -1), new Cell(0, 0), new Cell(1, 0), new Cell(1, 1)]];
    this.rSkew = [[new Cell(-1, 0), new Cell(0, 0), new Cell(0, 1), new Cell(1, 1)], [new Cell(0, 1), new Cell(0, 0), new Cell(1, 0), new Cell(1, -1)]];
    this.shapes = [this.square, this.lCorn, this.rCorn, this.straight, this.rSkew, this.lSkew, this.tee];
  }
  Tetrons.prototype.getShape_vux9f0$ = function (index, rot) {
    var n = this.shapes[index].length;
    return this.shapes[index][rot % n];
  };
  Tetrons.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Tetrons', interfaces: []};
  var Tetrons_instance = null;
  function Tetrons_getInstance() {
    if (Tetrons_instance === null) {
      new Tetrons();
    }return Tetrons_instance;
  }
  function TetronSprite(x, y, rot, tetron, color) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.tetron = tetron;
    this.color = color;
  }
  TetronSprite.prototype.move_fwq3ux$ = function (dx, dy, a) {
    var tmp$;
    this.x = this.x + dx | 0;
    this.y = this.y + dy | 0;
    if (this.valid_ytlutl$(a)) {
      tmp$ = true;
    } else {
      this.x = this.x - dx | 0;
      this.y = this.y - dy | 0;
      tmp$ = false;
    }
    return tmp$;
  };
  TetronSprite.prototype.rotate_ytlutl$ = function (a) {
    var tmp$;
    this.rot = this.rot + 1 | 0;
    if (this.valid_ytlutl$(a)) {
      tmp$ = true;
    } else {
      this.rot = this.rot - 1 | 0;
      tmp$ = false;
    }
    return tmp$;
  };
  TetronSprite.prototype.outOfBounds_0 = function (a, cell) {
    return cell.x < 0 || cell.y < 0 || cell.x >= a.length || cell.y >= a[0].length;
  };
  TetronSprite.prototype.valid_ytlutl$ = function (a) {
    var tmp$, tmp$_0;
    var theta = this.rot % 4 * math.PI / 2;
    tmp$ = Tetrons_getInstance().getShape_vux9f0$(this.tetron, this.rot);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = tmp$[tmp$_0];
      var cell = this.translate_tjgqye$(c);
      if (this.outOfBounds_0(a, cell))
        return false;
      if (a[cell.x][cell.y] !== TetrisView$Companion_getInstance().BG)
        return false;
    }
    return true;
  };
  TetronSprite.prototype.getCells = function () {
    var tmp$, tmp$_0;
    var cells = ArrayList_init();
    tmp$ = Tetrons_getInstance().getShape_vux9f0$(this.tetron, this.rot);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var cell = tmp$[tmp$_0];
      cells.add_11rb$(this.translate_tjgqye$(cell));
    }
    return cells;
  };
  TetronSprite.prototype.cell_5lk9kw$ = function (p) {
    return new Cell(numberToInt(p.x), numberToInt(p.y));
  };
  TetronSprite.prototype.place_ytlutl$ = function (a) {
    var tmp$, tmp$_0;
    tmp$ = Tetrons_getInstance().getShape_vux9f0$(this.tetron, this.rot);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = tmp$[tmp$_0];
      var cell = this.translate_tjgqye$(c);
      a[cell.x][cell.y] = this.color;
    }
  };
  TetronSprite.prototype.translate_tjgqye$ = function (cell) {
    return new Cell(this.x + cell.x | 0, this.y + cell.y | 0);
  };
  TetronSprite.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetronSprite', interfaces: []};
  TetronSprite.prototype.component1 = function () {
    return this.x;
  };
  TetronSprite.prototype.component2 = function () {
    return this.y;
  };
  TetronSprite.prototype.component3 = function () {
    return this.rot;
  };
  TetronSprite.prototype.component4 = function () {
    return this.tetron;
  };
  TetronSprite.prototype.component5 = function () {
    return this.color;
  };
  TetronSprite.prototype.copy_4qozqa$ = function (x, y, rot, tetron, color) {
    return new TetronSprite(x === void 0 ? this.x : x, y === void 0 ? this.y : y, rot === void 0 ? this.rot : rot, tetron === void 0 ? this.tetron : tetron, color === void 0 ? this.color : color);
  };
  TetronSprite.prototype.toString = function () {
    return 'TetronSprite(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', rot=' + Kotlin.toString(this.rot)) + (', tetron=' + Kotlin.toString(this.tetron)) + (', color=' + Kotlin.toString(this.color)) + ')';
  };
  TetronSprite.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.rot) | 0;
    result = result * 31 + Kotlin.hashCode(this.tetron) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  TetronSprite.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.rot, other.rot) && Kotlin.equals(this.tetron, other.tetron) && Kotlin.equals(this.color, other.color)))));
  };
  function Cell(x, y) {
    this.x = x;
    this.y = y;
  }
  Cell.$metadata$ = {kind: Kind_CLASS, simpleName: 'Cell', interfaces: []};
  Cell.prototype.component1 = function () {
    return this.x;
  };
  Cell.prototype.component2 = function () {
    return this.y;
  };
  Cell.prototype.copy_vux9f0$ = function (x, y) {
    return new Cell(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Cell.prototype.toString = function () {
    return 'Cell(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Cell.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Cell.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function AbstractGameState() {
  }
  AbstractGameState.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'AbstractGameState', interfaces: []};
  function ExtendedAbstractGameState() {
  }
  ExtendedAbstractGameState.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ExtendedAbstractGameState', interfaces: [AbstractGameState]};
  function AbstractValueFunction() {
  }
  AbstractValueFunction.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'AbstractValueFunction', interfaces: []};
  function SimplePlayerInterface() {
  }
  SimplePlayerInterface.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SimplePlayerInterface', interfaces: []};
  function GameRunner() {
    this.verbose = true;
    this.maxTicks = 5000;
  }
  GameRunner.prototype.runGames_r6vqh1$ = function (gameState, agent, opponent, nGames) {
    if (opponent === void 0)
      opponent = new RandomAgent();
    if (nGames === void 0)
      nGames = 10;
    var scores = new StatSummary('Scores for: ' + agent.toString());
    gameState.resetTotalTicks();
    for (var i = 0; i < nGames; i++) {
      gameState.randomInitialState();
      var finalState = this.runOneGame_cbgesi$(gameState.copy(), agent, opponent);
      scores.add_14dthe$(finalState.score());
    }
    println(scores);
    println('Total ticks: ' + toString(gameState.totalTicks()));
    println_0();
    return scores;
  };
  GameRunner.prototype.runOneGame_cbgesi$ = function (gameState, player, opponent) {
    var tmp$;
    var playerId = 0;
    player.reset();
    var n = 0;
    println('maxTicks = ' + toString(this.maxTicks));
    while (!gameState.isTerminal() && (tmp$ = n, n = tmp$ + 1 | 0, tmp$) < this.maxTicks) {
      var actions = new Int32Array([player.getAction_84v5ee$(gameState.copy(), playerId), opponent.getAction_84v5ee$(gameState.copy(), 1 - playerId | 0)]);
      gameState.next_q5rwfd$(actions);
    }
    if (this.verbose) {
      println('Game score: ' + gameState.score());
      println('Game ticks: ' + gameState.nTicks());
      println_0();
    }return gameState;
  };
  GameRunner.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameRunner', interfaces: []};
  function XColor(r, g, b, a) {
    XColor$Companion_getInstance();
    if (r === void 0)
      r = 0.0;
    if (g === void 0)
      g = 0.0;
    if (b === void 0)
      b = 0.0;
    if (a === void 0)
      a = 1.0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  function XColor$Companion() {
    XColor$Companion_instance = this;
    this.red = new XColor(1.0);
    this.green = new XColor(void 0, 1.0);
    this.blue = new XColor(void 0, void 0, 1.0);
    this.magenta = new XColor(1.0, void 0, 1.0);
    this.cyan = new XColor(void 0, 1.0, 1.0);
    this.yellow = new XColor(1.0, 1.0);
    this.white = new XColor(1.0, 1.0, 1.0);
    this.black = new XColor();
    this.gray = new XColor(0.5, 0.5, 0.5);
    this.pink = new XColor(1.0, 0.5, 0.5);
  }
  XColor$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var XColor$Companion_instance = null;
  function XColor$Companion_getInstance() {
    if (XColor$Companion_instance === null) {
      new XColor$Companion();
    }return XColor$Companion_instance;
  }
  XColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'XColor', interfaces: []};
  XColor.prototype.component1 = function () {
    return this.r;
  };
  XColor.prototype.component2 = function () {
    return this.g;
  };
  XColor.prototype.component3 = function () {
    return this.b;
  };
  XColor.prototype.component4 = function () {
    return this.a;
  };
  XColor.prototype.copy_7b5o5w$ = function (r, g, b, a) {
    return new XColor(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b, a === void 0 ? this.a : a);
  };
  XColor.prototype.toString = function () {
    return 'XColor(r=' + Kotlin.toString(this.r) + (', g=' + Kotlin.toString(this.g)) + (', b=' + Kotlin.toString(this.b)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  XColor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  XColor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.a, other.a)))));
  };
  function XGraphics() {
  }
  XGraphics.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'XGraphics', interfaces: []};
  function Drawable() {
  }
  Drawable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Drawable', interfaces: []};
  function XStyle(fg, bg, lc, stroke, fill, lineWidth) {
    if (fg === void 0)
      fg = XColor$Companion_getInstance().black;
    if (bg === void 0)
      bg = XColor$Companion_getInstance().white;
    if (lc === void 0)
      lc = XColor$Companion_getInstance().red;
    if (stroke === void 0)
      stroke = true;
    if (fill === void 0)
      fill = true;
    if (lineWidth === void 0)
      lineWidth = 2.0;
    this.fg = fg;
    this.bg = bg;
    this.lc = lc;
    this.stroke = stroke;
    this.fill = fill;
    this.lineWidth = lineWidth;
  }
  XStyle.$metadata$ = {kind: Kind_CLASS, simpleName: 'XStyle', interfaces: []};
  XStyle.prototype.component1 = function () {
    return this.fg;
  };
  XStyle.prototype.component2 = function () {
    return this.bg;
  };
  XStyle.prototype.component3 = function () {
    return this.lc;
  };
  XStyle.prototype.component4 = function () {
    return this.stroke;
  };
  XStyle.prototype.component5 = function () {
    return this.fill;
  };
  XStyle.prototype.component6 = function () {
    return this.lineWidth;
  };
  XStyle.prototype.copy_egb86o$ = function (fg, bg, lc, stroke, fill, lineWidth) {
    return new XStyle(fg === void 0 ? this.fg : fg, bg === void 0 ? this.bg : bg, lc === void 0 ? this.lc : lc, stroke === void 0 ? this.stroke : stroke, fill === void 0 ? this.fill : fill, lineWidth === void 0 ? this.lineWidth : lineWidth);
  };
  XStyle.prototype.toString = function () {
    return 'XStyle(fg=' + Kotlin.toString(this.fg) + (', bg=' + Kotlin.toString(this.bg)) + (', lc=' + Kotlin.toString(this.lc)) + (', stroke=' + Kotlin.toString(this.stroke)) + (', fill=' + Kotlin.toString(this.fill)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + ')';
  };
  XStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fg) | 0;
    result = result * 31 + Kotlin.hashCode(this.bg) | 0;
    result = result * 31 + Kotlin.hashCode(this.lc) | 0;
    result = result * 31 + Kotlin.hashCode(this.stroke) | 0;
    result = result * 31 + Kotlin.hashCode(this.fill) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    return result;
  };
  XStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fg, other.fg) && Kotlin.equals(this.bg, other.bg) && Kotlin.equals(this.lc, other.lc) && Kotlin.equals(this.stroke, other.stroke) && Kotlin.equals(this.fill, other.fill) && Kotlin.equals(this.lineWidth, other.lineWidth)))));
  };
  function TStyle(fg, font, size) {
    if (fg === void 0)
      fg = XColor$Companion_getInstance().cyan;
    if (font === void 0)
      font = 'Arial';
    if (size === void 0)
      size = 16.0;
    this.fg = fg;
    this.font = font;
    this.size = size;
  }
  TStyle.$metadata$ = {kind: Kind_CLASS, simpleName: 'TStyle', interfaces: []};
  TStyle.prototype.component1 = function () {
    return this.fg;
  };
  TStyle.prototype.component2 = function () {
    return this.font;
  };
  TStyle.prototype.component3 = function () {
    return this.size;
  };
  TStyle.prototype.copy_wqk38i$ = function (fg, font, size) {
    return new TStyle(fg === void 0 ? this.fg : fg, font === void 0 ? this.font : font, size === void 0 ? this.size : size);
  };
  TStyle.prototype.toString = function () {
    return 'TStyle(fg=' + Kotlin.toString(this.fg) + (', font=' + Kotlin.toString(this.font)) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  TStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fg) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  TStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fg, other.fg) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.size, other.size)))));
  };
  function XApp() {
  }
  XApp.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'XApp', interfaces: []};
  function XMouseEventType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function XMouseEventType_initFields() {
    XMouseEventType_initFields = function () {
    };
    XMouseEventType$Down_instance = new XMouseEventType('Down', 0);
    XMouseEventType$Up_instance = new XMouseEventType('Up', 1);
    XMouseEventType$Moved_instance = new XMouseEventType('Moved', 2);
    XMouseEventType$Dragged_instance = new XMouseEventType('Dragged', 3);
    XMouseEventType$Clicked_instance = new XMouseEventType('Clicked', 4);
  }
  var XMouseEventType$Down_instance;
  function XMouseEventType$Down_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Down_instance;
  }
  var XMouseEventType$Up_instance;
  function XMouseEventType$Up_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Up_instance;
  }
  var XMouseEventType$Moved_instance;
  function XMouseEventType$Moved_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Moved_instance;
  }
  var XMouseEventType$Dragged_instance;
  function XMouseEventType$Dragged_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Dragged_instance;
  }
  var XMouseEventType$Clicked_instance;
  function XMouseEventType$Clicked_getInstance() {
    XMouseEventType_initFields();
    return XMouseEventType$Clicked_instance;
  }
  XMouseEventType.$metadata$ = {kind: Kind_CLASS, simpleName: 'XMouseEventType', interfaces: [Enum]};
  function XMouseEventType$values() {
    return [XMouseEventType$Down_getInstance(), XMouseEventType$Up_getInstance(), XMouseEventType$Moved_getInstance(), XMouseEventType$Dragged_getInstance(), XMouseEventType$Clicked_getInstance()];
  }
  XMouseEventType.values = XMouseEventType$values;
  function XMouseEventType$valueOf(name) {
    switch (name) {
      case 'Down':
        return XMouseEventType$Down_getInstance();
      case 'Up':
        return XMouseEventType$Up_getInstance();
      case 'Moved':
        return XMouseEventType$Moved_getInstance();
      case 'Dragged':
        return XMouseEventType$Dragged_getInstance();
      case 'Clicked':
        return XMouseEventType$Clicked_getInstance();
      default:throwISE('No enum constant gui.XMouseEventType.' + name);
    }
  }
  XMouseEventType.valueOf_61zpoe$ = XMouseEventType$valueOf;
  function XMouseEvent(t, s) {
    this.t = t;
    this.s = s;
  }
  XMouseEvent.$metadata$ = {kind: Kind_CLASS, simpleName: 'XMouseEvent', interfaces: []};
  XMouseEvent.prototype.component1 = function () {
    return this.t;
  };
  XMouseEvent.prototype.component2 = function () {
    return this.s;
  };
  XMouseEvent.prototype.copy_ahly8o$ = function (t, s) {
    return new XMouseEvent(t === void 0 ? this.t : t, s === void 0 ? this.s : s);
  };
  XMouseEvent.prototype.toString = function () {
    return 'XMouseEvent(t=' + Kotlin.toString(this.t) + (', s=' + Kotlin.toString(this.s)) + ')';
  };
  XMouseEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.t) | 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    return result;
  };
  XMouseEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.t, other.t) && Kotlin.equals(this.s, other.s)))));
  };
  function XKeyEventType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function XKeyEventType_initFields() {
    XKeyEventType_initFields = function () {
    };
    XKeyEventType$Pressed_instance = new XKeyEventType('Pressed', 0);
    XKeyEventType$Released_instance = new XKeyEventType('Released', 1);
    XKeyEventType$Typed_instance = new XKeyEventType('Typed', 2);
    XKeyEventType$Down_instance = new XKeyEventType('Down', 3);
  }
  var XKeyEventType$Pressed_instance;
  function XKeyEventType$Pressed_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Pressed_instance;
  }
  var XKeyEventType$Released_instance;
  function XKeyEventType$Released_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Released_instance;
  }
  var XKeyEventType$Typed_instance;
  function XKeyEventType$Typed_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Typed_instance;
  }
  var XKeyEventType$Down_instance;
  function XKeyEventType$Down_getInstance() {
    XKeyEventType_initFields();
    return XKeyEventType$Down_instance;
  }
  XKeyEventType.$metadata$ = {kind: Kind_CLASS, simpleName: 'XKeyEventType', interfaces: [Enum]};
  function XKeyEventType$values() {
    return [XKeyEventType$Pressed_getInstance(), XKeyEventType$Released_getInstance(), XKeyEventType$Typed_getInstance(), XKeyEventType$Down_getInstance()];
  }
  XKeyEventType.values = XKeyEventType$values;
  function XKeyEventType$valueOf(name) {
    switch (name) {
      case 'Pressed':
        return XKeyEventType$Pressed_getInstance();
      case 'Released':
        return XKeyEventType$Released_getInstance();
      case 'Typed':
        return XKeyEventType$Typed_getInstance();
      case 'Down':
        return XKeyEventType$Down_getInstance();
      default:throwISE('No enum constant gui.XKeyEventType.' + name);
    }
  }
  XKeyEventType.valueOf_61zpoe$ = XKeyEventType$valueOf;
  function XKeyEvent(t, keyCode) {
    this.t = t;
    this.keyCode = keyCode;
  }
  XKeyEvent.$metadata$ = {kind: Kind_CLASS, simpleName: 'XKeyEvent', interfaces: []};
  XKeyEvent.prototype.component1 = function () {
    return this.t;
  };
  XKeyEvent.prototype.component2 = function () {
    return this.keyCode;
  };
  XKeyEvent.prototype.copy_pvpu5w$ = function (t, keyCode) {
    return new XKeyEvent(t === void 0 ? this.t : t, keyCode === void 0 ? this.keyCode : keyCode);
  };
  XKeyEvent.prototype.toString = function () {
    return 'XKeyEvent(t=' + Kotlin.toString(this.t) + (', keyCode=' + Kotlin.toString(this.keyCode)) + ')';
  };
  XKeyEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.t) | 0;
    result = result * 31 + Kotlin.hashCode(this.keyCode) | 0;
    return result;
  };
  XKeyEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.t, other.t) && Kotlin.equals(this.keyCode, other.keyCode)))));
  };
  function XKeyMap() {
    XKeyMap$Companion_getInstance();
  }
  function XKeyMap$Companion() {
    XKeyMap$Companion_instance = this;
    this.left = 37;
    this.up = 38;
    this.right = 39;
    this.down = 40;
    this.space = 32;
  }
  XKeyMap$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var XKeyMap$Companion_instance = null;
  function XKeyMap$Companion_getInstance() {
    if (XKeyMap$Companion_instance === null) {
      new XKeyMap$Companion();
    }return XKeyMap$Companion_instance;
  }
  function XRect(centre, w, h, dStyle) {
    this.centre = centre;
    this.w = w;
    this.h = h;
    this.dStyle_i0iva0$_0 = dStyle;
  }
  Object.defineProperty(XRect.prototype, 'dStyle', {get: function () {
    return this.dStyle_i0iva0$_0;
  }, set: function (dStyle) {
    this.dStyle_i0iva0$_0 = dStyle;
  }});
  XRect.$metadata$ = {kind: Kind_CLASS, simpleName: 'XRect', interfaces: [Drawable]};
  XRect.prototype.component1 = function () {
    return this.centre;
  };
  XRect.prototype.component2 = function () {
    return this.w;
  };
  XRect.prototype.component3 = function () {
    return this.h;
  };
  XRect.prototype.component4 = function () {
    return this.dStyle;
  };
  XRect.prototype.copy_ul7ru4$ = function (centre, w, h, dStyle) {
    return new XRect(centre === void 0 ? this.centre : centre, w === void 0 ? this.w : w, h === void 0 ? this.h : h, dStyle === void 0 ? this.dStyle : dStyle);
  };
  XRect.prototype.toString = function () {
    return 'XRect(centre=' + Kotlin.toString(this.centre) + (', w=' + Kotlin.toString(this.w)) + (', h=' + Kotlin.toString(this.h)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + ')';
  };
  XRect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.centre) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    return result;
  };
  XRect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.centre, other.centre) && Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h) && Kotlin.equals(this.dStyle, other.dStyle)))));
  };
  function XLine(a, b, dStyle) {
    this.a = a;
    this.b = b;
    this.dStyle_l6u5e0$_0 = dStyle;
  }
  Object.defineProperty(XLine.prototype, 'dStyle', {get: function () {
    return this.dStyle_l6u5e0$_0;
  }, set: function (dStyle) {
    this.dStyle_l6u5e0$_0 = dStyle;
  }});
  XLine.$metadata$ = {kind: Kind_CLASS, simpleName: 'XLine', interfaces: [Drawable]};
  XLine.prototype.component1 = function () {
    return this.a;
  };
  XLine.prototype.component2 = function () {
    return this.b;
  };
  XLine.prototype.component3 = function () {
    return this.dStyle;
  };
  XLine.prototype.copy_7isnck$ = function (a, b, dStyle) {
    return new XLine(a === void 0 ? this.a : a, b === void 0 ? this.b : b, dStyle === void 0 ? this.dStyle : dStyle);
  };
  XLine.prototype.toString = function () {
    return 'XLine(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + ')';
  };
  XLine.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    return result;
  };
  XLine.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.dStyle, other.dStyle)))));
  };
  function XText(str, p, tStyle, dStyle) {
    this.str = str;
    this.p = p;
    this.tStyle = tStyle;
    this.dStyle_ayoq6n$_0 = dStyle;
  }
  Object.defineProperty(XText.prototype, 'dStyle', {get: function () {
    return this.dStyle_ayoq6n$_0;
  }, set: function (dStyle) {
    this.dStyle_ayoq6n$_0 = dStyle;
  }});
  XText.$metadata$ = {kind: Kind_CLASS, simpleName: 'XText', interfaces: [Drawable]};
  XText.prototype.component1 = function () {
    return this.str;
  };
  XText.prototype.component2 = function () {
    return this.p;
  };
  XText.prototype.component3 = function () {
    return this.tStyle;
  };
  XText.prototype.component4 = function () {
    return this.dStyle;
  };
  XText.prototype.copy_gcbicq$ = function (str, p, tStyle, dStyle) {
    return new XText(str === void 0 ? this.str : str, p === void 0 ? this.p : p, tStyle === void 0 ? this.tStyle : tStyle, dStyle === void 0 ? this.dStyle : dStyle);
  };
  XText.prototype.toString = function () {
    return 'XText(str=' + Kotlin.toString(this.str) + (', p=' + Kotlin.toString(this.p)) + (', tStyle=' + Kotlin.toString(this.tStyle)) + (', dStyle=' + Kotlin.toString(this.dStyle)) + ')';
  };
  XText.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    result = result * 31 + Kotlin.hashCode(this.p) | 0;
    result = result * 31 + Kotlin.hashCode(this.tStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.dStyle) | 0;
    return result;
  };
  XText.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.str, other.str) && Kotlin.equals(this.p, other.p) && Kotlin.equals(this.tStyle, other.tStyle) && Kotlin.equals(this.dStyle, other.dStyle)))));
  };
  function XPoly(start, points) {
    this.start = start;
    this.points = points;
    this.intStyle_0 = new XStyle();
  }
  Object.defineProperty(XPoly.prototype, 'dStyle', {get: function () {
    return this.intStyle_0;
  }, set: function (value) {
    this.intStyle_0 = value;
  }});
  XPoly.$metadata$ = {kind: Kind_CLASS, simpleName: 'XPoly', interfaces: [Drawable]};
  XPoly.prototype.component1 = function () {
    return this.start;
  };
  XPoly.prototype.component2 = function () {
    return this.points;
  };
  XPoly.prototype.copy_j8a7hb$ = function (start, points) {
    return new XPoly(start === void 0 ? this.start : start, points === void 0 ? this.points : points);
  };
  XPoly.prototype.toString = function () {
    return 'XPoly(start=' + Kotlin.toString(this.start) + (', points=' + Kotlin.toString(this.points)) + ')';
  };
  XPoly.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  XPoly.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.points, other.points)))));
  };
  function v(x, y) {
    return new Vec2d(x, y);
  }
  function Vec2d(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  Vec2d.prototype.plus_5lk9kw$ = function (v_0) {
    return v(this.x + v_0.x, this.y + v_0.y);
  };
  Vec2d.prototype.unaryMinus = function () {
    return v(-this.x, -this.y);
  };
  Vec2d.prototype.minus_5lk9kw$ = function (v_0) {
    return v(this.x - v_0.x, this.y - v_0.y);
  };
  Vec2d.prototype.times_14dthe$ = function (koef) {
    return v(this.x * koef, this.y * koef);
  };
  Vec2d.prototype.distanceTo_5lk9kw$ = function (v) {
    var x = this.minus_5lk9kw$(v).sqr;
    return Math_0.sqrt(x);
  };
  Vec2d.prototype.gridDistanceTo_5lk9kw$ = function (v) {
    var x = this.x - v.x;
    var tmp$ = Math_0.abs(x);
    var x_0 = this.y - v.y;
    return tmp$ + Math_0.abs(x_0);
  };
  Vec2d.prototype.rotatedBy_14dthe$ = function (theta) {
    var sin = Math_0.sin(theta);
    var cos = Math_0.cos(theta);
    return v(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
  };
  Vec2d.prototype.isInRect_yw3f10$ = function (topLeft, size) {
    return this.x >= topLeft.x && this.x <= topLeft.x + size.x && this.y >= topLeft.y && this.y <= topLeft.y + size.y;
  };
  Object.defineProperty(Vec2d.prototype, 'sqr', {get: function () {
    return this.x * this.x + this.y * this.y;
  }});
  Object.defineProperty(Vec2d.prototype, 'normalized', {get: function () {
    var x = this.sqr;
    return this.times_14dthe$(1.0 / Math_0.sqrt(x));
  }});
  Vec2d.prototype.sp_yw3f10$ = function (a, b) {
    return a.x * b.x + a.y * b.y;
  };
  Vec2d.prototype.sp_5lk9kw$ = function (a) {
    return this.x * a.x + this.y * a.y;
  };
  Vec2d.$metadata$ = {kind: Kind_CLASS, simpleName: 'Vec2d', interfaces: []};
  Vec2d.prototype.component1 = function () {
    return this.x;
  };
  Vec2d.prototype.component2 = function () {
    return this.y;
  };
  Vec2d.prototype.copy_lu1900$ = function (x, y) {
    return new Vec2d(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vec2d.prototype.toString = function () {
    return 'Vec2d(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Vec2d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vec2d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function StatSummary(name) {
    StatSummary$Companion_getInstance();
    if (name === void 0)
      name = '';
    this.name = name;
    this.sum_0 = 0;
    this.sumsq_0 = 0;
    this.min_0 = 0;
    this.max_0 = 0;
    this.mean_0 = 0;
    this.sd_0 = 0;
    this.strict_0 = false;
    this.n_8be2vx$ = 0;
    this.valid_8be2vx$ = false;
    this.n_8be2vx$ = 0;
    this.sum_0 = 0.0;
    this.sumsq_0 = 0.0;
    this.min_0 = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
    this.max_0 = kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY;
    this.valid_8be2vx$ = false;
  }
  StatSummary.prototype.setStrict_6taknv$ = function (strict) {
    this.strict_0 = strict;
    return this;
  };
  StatSummary.prototype.reset = function () {
    this.n_8be2vx$ = 0;
    this.sum_0 = 0.0;
    this.sumsq_0 = 0.0;
    this.min_0 = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
    this.max_0 = kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY;
  };
  StatSummary.prototype.max = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    return this.max_0;
  };
  StatSummary.prototype.min = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    return this.min_0;
  };
  StatSummary.prototype.mean = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    if (!this.valid_8be2vx$)
      this.computeStats_0();
    return this.mean_0;
  };
  StatSummary.prototype.sum = function () {
    if (this.strict_0 && this.n_8be2vx$ < 1)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    return this.sum_0;
  };
  StatSummary.prototype.sumSquareDiff = function () {
    return this.sumsq_0 - this.n_8be2vx$ * this.mean() * this.mean();
  };
  StatSummary.prototype.computeStats_0 = function () {
    if (!this.valid_8be2vx$) {
      this.mean_0 = this.sum_0 / this.n_8be2vx$;
      var num = this.sumsq_0 - this.n_8be2vx$ * this.mean_0 * this.mean_0;
      if (num < 0) {
        num = 0.0;
      }var x = num / (this.n_8be2vx$ - 1 | 0);
      this.sd_0 = Math_0.sqrt(x);
      this.valid_8be2vx$ = true;
    }};
  StatSummary.prototype.sd = function () {
    if (this.strict_0 && this.n_8be2vx$ < 2)
      throw RuntimeException_init(StatSummary$Companion_getInstance().strictMessage_8be2vx$);
    if (!this.valid_8be2vx$)
      this.computeStats_0();
    return this.sd_0;
  };
  StatSummary.prototype.n = function () {
    return this.n_8be2vx$;
  };
  StatSummary.prototype.stdErr = function () {
    var tmp$ = this.sd();
    var x = this.n_8be2vx$;
    return tmp$ / Math_0.sqrt(x);
  };
  StatSummary.prototype.add_qlj2oq$ = function (ss) {
    this.n_8be2vx$ = this.n_8be2vx$ + ss.n_8be2vx$ | 0;
    this.sum_0 += ss.sum_0;
    this.sumsq_0 += ss.sumsq_0;
    var a = this.max_0;
    var b = ss.max_0;
    this.max_0 = Math_0.max(a, b);
    var a_0 = this.min_0;
    var b_0 = ss.min_0;
    this.min_0 = Math_0.min(a_0, b_0);
    this.valid_8be2vx$ = false;
    return this;
  };
  StatSummary.prototype.add_14dthe$ = function (d) {
    this.n_8be2vx$ = this.n_8be2vx$ + 1 | 0;
    this.sum_0 += d;
    this.sumsq_0 += d * d;
    var a = this.min_0;
    this.min_0 = Math_0.min(a, d);
    var a_0 = this.max_0;
    this.max_0 = Math_0.max(a_0, d);
    this.valid_8be2vx$ = false;
    return this;
  };
  StatSummary.prototype.removeFromMean_14dthe$ = function (d) {
    if (this.n_8be2vx$ < 1) {
      this.n_8be2vx$ = this.n_8be2vx$ - 1 | 0;
      this.sum_0 -= d;
      this.sumsq_0 -= d * d;
      this.valid_8be2vx$ = false;
    }};
  StatSummary.prototype.add_3p81yu$ = function (n) {
    this.add_14dthe$(numberToDouble(n));
    return this;
  };
  StatSummary.prototype.add_yqxtqz$ = function (xa) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== xa.length; ++tmp$) {
      var x = xa[tmp$];
      this.add_14dthe$(x);
    }
    return this;
  };
  StatSummary.prototype.add_d3e2cz$ = function (xa) {
    var tmp$;
    tmp$ = xa.iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      this.add_14dthe$(x);
    }
    return this;
  };
  StatSummary.prototype.toString = function () {
    var s = this.name == null ? '' : ensureNotNull(this.name) + '\n';
    s += ' min = ' + toString(this.min()) + '\n' + ' max = ' + toString(this.max()) + '\n' + ' ave = ' + toString(this.mean()) + '\n' + ' sd  = ' + toString(this.sd()) + '\n' + ' se  = ' + toString(this.stdErr()) + '\n' + ' sum  = ' + toString(this.sum_0) + '\n' + ' sumsq  = ' + toString(this.sumsq_0) + '\n' + ' n   = ' + toString(this.n_8be2vx$);
    return s;
  };
  StatSummary.prototype.compareTo_11rb$ = function (o) {
    if (this.mean() > o.mean())
      return 1;
    return this.mean() < o.mean() ? -1 : 0;
  };
  function StatSummary$Companion() {
    StatSummary$Companion_instance = this;
    this.strictMessage_8be2vx$ = 'No values in summary';
  }
  StatSummary$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StatSummary$Companion_instance = null;
  function StatSummary$Companion_getInstance() {
    if (StatSummary$Companion_instance === null) {
      new StatSummary$Companion();
    }return StatSummary$Companion_instance;
  }
  StatSummary.$metadata$ = {kind: Kind_CLASS, simpleName: 'StatSummary', interfaces: [Comparable]};
  var Platform_instance = null;
  var canvas;
  var test;
  function initalizeCanvas() {
    var tmp$, tmp$_0;
    println('Init canvas');
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    context.canvas.width = window.innerWidth - 50 | 0;
    context.canvas.height = window.innerHeight - 50 | 0;
    ensureNotNull(document.body).appendChild(canvas);
    return canvas;
  }
  function Dispatcher() {
    this.title = document.title;
    if (contains(this.title, 'Tetris'))
      (new BasicTest()).run();
    else if (contains(this.title, 'Speed'))
      (new SpeedTest()).run();
    else if (contains(this.title, 'Griddle'))
      (new GriddleTest()).run();
    else if (contains(this.title, 'XMLHTTP'))
      (new HTTPTest()).run();
  }
  Dispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'Dispatcher', interfaces: []};
  function GriddleTest() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.x = 0;
    this.xg = new XGraphicsJS(canvas);
    this.frameRate = 10;
    this.intervalTime = 1000 / this.frameRate | 0;
    this.shuffleSeed = null;
    this.app = null;
    document.bgColor = 'blue';
    var t1 = this.jsMillis();
    this.shuffleSeed = Kotlin.isType(tmp$_0 = document.getElementById('shuffleSeed'), HTMLInputElement) ? tmp$_0 : throwCCE();
    println('Shuffle seed input element: ' + toString(this.shuffleSeed));
    var button = Kotlin.isType(tmp$_1 = document.getElementById('newGame'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    println('Button element: ' + button);
    button.onclick = GriddleTest_init$lambda(this);
    this.app = new GriddleController(this);
    var loadedScript = Kotlin.isType(tmp$_2 = document.getElementById('load'), HTMLScriptElement) ? tmp$_2 : throwCCE();
    println('Loaded script element: ' + loadedScript);
    println(loadedScript.innerText);
    println(loadedScript.src);
    var wordString = this.getWords();
    var words = split(wordString, ['\n']);
    this.app.loadWords_mhpeer$(words);
    this.rect = canvas.getBoundingClientRect();
  }
  GriddleTest.prototype.newGame = function () {
    println('New game');
    this.app.newGame();
  };
  GriddleTest.prototype.getWords = function () {
    return gridWords;
  };
  GriddleTest.prototype.jsTypeOf_za3rmp$ = function (o) {
    return typeof o;
  };
  GriddleTest.prototype.jsMillis = function () {
    return Date.now();
  };
  GriddleTest.prototype.update = function () {
    this.app.paint_vzjx8w$(this.xg);
  };
  function GriddleTest$run$lambda(this$GriddleTest) {
    return function () {
      this$GriddleTest.update();
      return Unit;
    };
  }
  function GriddleTest$run$lambda_0(this$GriddleTest) {
    return function (e) {
      if (Kotlin.isType(e, MouseEvent)) {
        var eventType = XMouseEventType$Down_getInstance();
        this$GriddleTest.app.handleMouseEvent_x4hb96$(new XMouseEvent(eventType, new Vec2d(e.x - this$GriddleTest.rect.left, e.y - this$GriddleTest.rect.top)));
        document.title = this$GriddleTest.app.game.score().toString();
        println(e.y);
      }return Unit;
    };
  }
  GriddleTest.prototype.run = function () {
    console.log('In Griddle run()');
    println(document.title);
    window.setInterval(GriddleTest$run$lambda(this), this.intervalTime);
    canvas.onmousedown = GriddleTest$run$lambda_0(this);
  };
  GriddleTest.prototype.getSeed = function () {
    var input = this.shuffleSeed;
    if (input != null) {
      println('Returning seed = ' + input.value);
      var $receiver = input.value;
      var tmp$;
      return toLong(trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString());
    } else {
      println('Failed null check: ' + toString(this.shuffleSeed));
      return L10;
    }
  };
  function GriddleTest_init$lambda(this$GriddleTest) {
    return function (it) {
      this$GriddleTest.newGame();
      return Unit;
    };
  }
  GriddleTest.$metadata$ = {kind: Kind_CLASS, simpleName: 'GriddleTest', interfaces: [GriddleControl]};
  function HTTPTest() {
  }
  HTTPTest.prototype.run = function () {
    console.log('In HTTPTest run()');
    document.title = 'Testing XML HTTP';
    ensureNotNull(document.body).innerHTML = '<h1> Making the request <\/h1>';
    var responsePromise = window.fetch('./index.html');
    println(responsePromise);
  };
  HTTPTest.$metadata$ = {kind: Kind_CLASS, simpleName: 'HTTPTest', interfaces: []};
  function SpeedTest() {
    this.running = false;
    this.gamesPerTest = 10;
    this.now = (new TestTimeSource()).markNow();
  }
  function SpeedTest$run$lambda(this$SpeedTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Pressed_getInstance();
        this$SpeedTest.runTest();
      }return Unit;
    };
  }
  SpeedTest.prototype.run = function () {
    document.onkeypress = SpeedTest$run$lambda(this);
  };
  SpeedTest.prototype.runTest = function () {
    if (!this.running) {
      this.running = true;
      ensureNotNull(document.body).innerText = 'Running: ';
      var agent = new RandomAgent();
      agent = new SimpleEvoAgent(void 0, void 0, void 0, void 0, void 0, void 0, void 0, 0.99);
      var game = new TetrisGame();
      var stats = (new GameRunner()).runGames_r6vqh1$(game, agent, agent, this.gamesPerTest);
      appendText(ensureNotNull(document.body), 'Average score: ' + stats.mean() + 'b' + '\n' + ' ');
      ensureNotNull(document.body).append('Elapsed: ( ' + this.now.elapsedNow() + ' )');
      ensureNotNull(document.body).append('<p>nTicks: ' + game.totalTicks().toString() + '<\/p>');
      this.running = false;
    }};
  SpeedTest.$metadata$ = {kind: Kind_CLASS, simpleName: 'SpeedTest', interfaces: []};
  function BasicTest() {
    var tmp$;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.x = 0;
    this.xg = new XGraphicsJS(canvas);
    this.app = new TetrisController();
    this.frameRate = 25;
    this.intervalTime = 1000 / this.frameRate | 0;
    document.bgColor = 'red';
    if (contains(document.title, 'Speed'))
      document.title = 'Picked up Speed';
  }
  BasicTest.prototype.setData_bxpe9y$ = function (tv) {
    var tmp$, tmp$_0, tmp$_1;
    var array = Array_0(tv.nCols);
    var tmp$_2;
    tmp$_2 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_2; i++) {
      var array_0 = new Int32Array(tv.nRows);
      var tmp$_3;
      tmp$_3 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_3; i_0++) {
        array_0[i_0] = TetrisView$Companion_getInstance().BG;
      }
      array[i] = array_0;
    }
    var a = array;
    tmp$ = tv.nCols;
    for (var i_1 = 0; i_1 < tmp$; i_1++) {
      tmp$_0 = tv.nRows / 2 | 0;
      tmp$_1 = tv.nRows;
      for (var j = tmp$_0; j < tmp$_1; j++)
        a[i_1][j] = Random.Default.nextInt_za3lpa$(TetrisView$Companion_getInstance().colors.length);
    }
    var shape = new TetronSprite(tv.nCols / 2 | 0, 3, 2, 1, 2);
    var ghost = new TetronSprite(tv.nCols / 2 | 0, 7, 2, 3, 2);
    tv.setData_avu7ag$(a, shape, ghost);
  };
  BasicTest.prototype.update = function () {
    this.app.paint_vzjx8w$(this.xg);
  };
  function BasicTest$run$lambda(this$BasicTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Pressed_getInstance();
        this$BasicTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function BasicTest$run$lambda_0(this$BasicTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Down_getInstance();
        this$BasicTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function BasicTest$run$lambda_1(this$BasicTest) {
    return function (e) {
      if (Kotlin.isType(e, KeyboardEvent)) {
        var eventType = XKeyEventType$Released_getInstance();
        this$BasicTest.app.handleKeyEvent_wtf8cg$(new XKeyEvent(eventType, e.keyCode));
      }return Unit;
    };
  }
  function BasicTest$run$lambda_2(this$BasicTest) {
    return function () {
      this$BasicTest.update();
      return Unit;
    };
  }
  BasicTest.prototype.run = function () {
    console.log('In run()');
    println(document.title);
    document.onkeypress = BasicTest$run$lambda(this);
    document.onkeydown = BasicTest$run$lambda_0(this);
    document.onkeyup = BasicTest$run$lambda_1(this);
    window.setInterval(BasicTest$run$lambda_2(this), this.intervalTime);
  };
  BasicTest.$metadata$ = {kind: Kind_CLASS, simpleName: 'BasicTest', interfaces: []};
  function XGraphicsJS(canvas) {
    this.canvas = canvas;
    this.drawList = ArrayList_init();
    this.intStyle = new XStyle();
  }
  XGraphicsJS.prototype.width = function () {
    return this.canvas.width;
  };
  XGraphicsJS.prototype.height = function () {
    return this.canvas.height;
  };
  XGraphicsJS.prototype.draw_dvdmun$ = function (toDraw) {
    if (Kotlin.isType(toDraw, XRect))
      this.drawRect_ax8lih$(toDraw);
    if (Kotlin.isType(toDraw, XPoly))
      this.drawPoly_ax7j69$(toDraw);
    if (Kotlin.isType(toDraw, XLine))
      this.drawLine_ax4ut5$(toDraw);
    if (Kotlin.isType(toDraw, XText))
      this.drawText_ax9vzm$(toDraw);
  };
  XGraphicsJS.prototype.drawRect_ax8lih$ = function (rect) {
    var g = this.canvas;
    var receiver = rect.dStyle;
    var tmp$;
    var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    context.save();
    context.globalAlpha = 1.0;
    if (receiver.fill) {
      context.fillStyle = this.rgba_gr83cy$(receiver.fg);
      context.fillRect(rect.centre.x - rect.w / 2, rect.centre.y - rect.h / 2, rect.w, rect.h);
    }if (receiver.stroke) {
      context.strokeStyle = this.rgba_gr83cy$(receiver.lc);
      context.lineWidth = receiver.lineWidth;
      context.strokeRect(rect.centre.x - rect.w / 2, rect.centre.y - rect.h / 2, rect.w, rect.h);
    }context.restore();
  };
  XGraphicsJS.prototype.drawLine_ax4ut5$ = function (line) {
    var g = this.canvas;
    var path = new Path2D();
    path.moveTo(line.a.x, line.a.y);
    path.lineTo(line.b.x, line.b.y);
    path.closePath();
    var receiver = line.dStyle;
    var tmp$;
    var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    context.save();
    if (receiver.stroke) {
      context.strokeStyle = this.rgba_gr83cy$(receiver.lc);
      context.lineWidth = receiver.lineWidth;
      context.stroke(path);
    }context.restore();
  };
  XGraphicsJS.prototype.drawText_ax9vzm$ = function (text) {
    var g = this.canvas;
    if (g != null) {
      var receiver = text.tStyle;
      var tmp$;
      var context = Kotlin.isType(tmp$ = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
      context.save();
      context.font = numberToInt(receiver.size).toString() + 'px Arial';
      context.fillStyle = this.rgba_gr83cy$(receiver.fg);
      context.textAlign = 'center';
      var metrics = context.measureText(text.str);
      context.fillText(text.str, text.p.x, text.p.y + metrics.actualBoundingBoxAscent / 2);
      context.restore();
    }};
  XGraphicsJS.prototype.v_mx4ult$ = function (x) {
    return numberToInt(255 * x);
  };
  XGraphicsJS.prototype.rgba_gr83cy$ = function (xColor) {
    return 'rgba(' + this.v_mx4ult$(xColor.r) + ', ' + this.v_mx4ult$(xColor.g) + ', ' + this.v_mx4ult$(xColor.b) + ', ' + xColor.a + ')';
  };
  XGraphicsJS.prototype.drawPoly_ax7j69$ = function (poly) {
    var path = new Path2D();
    var tmp$;
    path.moveTo(poly.points.get_za3lpa$(0).x, poly.points.get_za3lpa$(0).y);
    tmp$ = poly.points.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      path.lineTo(v.x, v.y);
    }
    path.closePath();
    var g = this.canvas;
    if (g != null) {
      var $receiver = poly.dStyle;
      var tmp$_0;
      var context = Kotlin.isType(tmp$_0 = g.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
      context.save();
      context.lineWidth = $receiver.lineWidth;
      context.translate(poly.start.x, poly.start.y);
      context.fillStyle = this.rgba_gr83cy$($receiver.fg);
      if ($receiver.fill)
        context.fill(path);
      if ($receiver.stroke)
        context.strokeStyle = this.rgba_gr83cy$($receiver.lc);
      context.stroke(path);
      context.restore();
    }};
  XGraphicsJS.prototype.drawables = function () {
    return this.drawList;
  };
  XGraphicsJS.prototype.redraw = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Object.defineProperty(XGraphicsJS.prototype, 'style', {get: function () {
    return this.intStyle;
  }, set: function (value) {
    this.intStyle = value;
  }});
  XGraphicsJS.$metadata$ = {kind: Kind_CLASS, simpleName: 'XGraphicsJS', interfaces: [XGraphics]};
  var package$agents = _.agents || (_.agents = {});
  package$agents.DoNothingAgent = DoNothingAgent;
  package$agents.main_kand9s$ = main;
  package$agents.MutationTransducer = MutationTransducer;
  package$agents.RandomAgent = RandomAgent;
  package$agents.SimpleEvoAgent = SimpleEvoAgent;
  var package$games = _.games || (_.games = {});
  var package$griddle = package$games.griddle || (package$games.griddle = {});
  package$griddle.GriddleControl = GriddleControl;
  package$griddle.DefaultControl = DefaultControl;
  package$griddle.GriddleController = GriddleController;
  Object.defineProperty(GriddleState, 'Ready', {get: GriddleState$Ready_getInstance});
  Object.defineProperty(GriddleState, 'GameOn', {get: GriddleState$GameOn_getInstance});
  Object.defineProperty(GriddleState, 'GameOver', {get: GriddleState$GameOver_getInstance});
  package$griddle.GriddleState = GriddleState;
  Object.defineProperty(GriddleGame, 'Companion', {get: GriddleGame$Companion_getInstance});
  package$griddle.GriddleGame = GriddleGame;
  package$griddle.GridCell = GridCell;
  Object.defineProperty(GriddleView, 'Companion', {get: GriddleView$Companion_getInstance});
  package$griddle.GriddleView = GriddleView;
  package$griddle.LetterTile = LetterTile;
  var package$ai = package$griddle.ai || (package$griddle.ai = {});
  package$ai.LetterGridModel = LetterGridModel;
  package$ai.Player = Player;
  MCPlayer.ScoredCell = MCPlayer$ScoredCell;
  package$ai.MCPlayer = MCPlayer;
  Object.defineProperty(FastSampleDeck, 'Companion', {get: FastSampleDeck$Companion_getInstance});
  var package$deck = package$griddle.deck || (package$griddle.deck = {});
  package$deck.FastSampleDeck = FastSampleDeck;
  Object.defineProperty(StatDeck, 'Companion', {get: StatDeck$Companion_getInstance});
  package$deck.StatDeck = StatDeck;
  Object.defineProperty(package$deck, 'ShuffleValidator', {get: ShuffleValidator_getInstance});
  Object.defineProperty(GridScan, 'Companion', {get: GridScan$Companion_getInstance});
  var package$words = package$griddle.words || (package$griddle.words = {});
  package$words.GridScan = GridScan;
  Object.defineProperty(Dir, 'H', {get: Dir$H_getInstance});
  Object.defineProperty(Dir, 'V', {get: Dir$V_getInstance});
  package$words.Dir = Dir;
  Object.defineProperty(GridWord, 'Companion', {get: GridWord$Companion_getInstance});
  package$words.GridWord = GridWord;
  package$words.TrieDict = TrieDict;
  Object.defineProperty(TrieNode, 'Companion', {get: TrieNode$Companion_getInstance});
  package$words.TrieNode = TrieNode;
  var package$tetris = package$games.tetris || (package$games.tetris = {});
  package$tetris.TetrisController = TetrisController;
  package$tetris.TetrisKeyController = TetrisKeyController;
  Object.defineProperty(Actions, 'DoNothing', {get: Actions$DoNothing_getInstance});
  Object.defineProperty(Actions, 'Left', {get: Actions$Left_getInstance});
  Object.defineProperty(Actions, 'Right', {get: Actions$Right_getInstance});
  Object.defineProperty(Actions, 'Rotate', {get: Actions$Rotate_getInstance});
  Object.defineProperty(Actions, 'Down', {get: Actions$Down_getInstance});
  Object.defineProperty(Actions, 'Drop', {get: Actions$Drop_getInstance});
  package$tetris.Actions = Actions;
  Object.defineProperty(TetrisGame, 'Companion', {get: TetrisGame$Companion_getInstance});
  package$tetris.TetrisGame = TetrisGame;
  Object.defineProperty(TetrisModel, 'Companion', {get: TetrisModel$Companion_getInstance});
  package$tetris.TetrisModel = TetrisModel;
  Object.defineProperty(package$tetris, 'TetrisConstants', {get: TetrisConstants_getInstance});
  Object.defineProperty(ColHeightDiff, 'Companion', {get: ColHeightDiff$Companion_getInstance});
  package$tetris.ColHeightDiff = ColHeightDiff;
  Object.defineProperty(TetrisView, 'Companion', {get: TetrisView$Companion_getInstance});
  package$tetris.TetrisView = TetrisView;
  Object.defineProperty(package$tetris, 'Tetrons', {get: Tetrons_getInstance});
  package$tetris.TetronSprite = TetronSprite;
  package$tetris.Cell = Cell;
  var package$ggi = _.ggi || (_.ggi = {});
  package$ggi.AbstractGameState = AbstractGameState;
  package$ggi.ExtendedAbstractGameState = ExtendedAbstractGameState;
  package$ggi.AbstractValueFunction = AbstractValueFunction;
  package$ggi.SimplePlayerInterface = SimplePlayerInterface;
  var package$ggik = _.ggik || (_.ggik = {});
  package$ggik.GameRunner = GameRunner;
  var package$gui = _.gui || (_.gui = {});
  Object.defineProperty(XColor, 'Companion', {get: XColor$Companion_getInstance});
  package$gui.XColor = XColor;
  package$gui.XGraphics = XGraphics;
  package$gui.Drawable = Drawable;
  package$gui.XStyle = XStyle;
  package$gui.TStyle = TStyle;
  package$gui.XApp = XApp;
  Object.defineProperty(XMouseEventType, 'Down', {get: XMouseEventType$Down_getInstance});
  Object.defineProperty(XMouseEventType, 'Up', {get: XMouseEventType$Up_getInstance});
  Object.defineProperty(XMouseEventType, 'Moved', {get: XMouseEventType$Moved_getInstance});
  Object.defineProperty(XMouseEventType, 'Dragged', {get: XMouseEventType$Dragged_getInstance});
  Object.defineProperty(XMouseEventType, 'Clicked', {get: XMouseEventType$Clicked_getInstance});
  package$gui.XMouseEventType = XMouseEventType;
  package$gui.XMouseEvent = XMouseEvent;
  Object.defineProperty(XKeyEventType, 'Pressed', {get: XKeyEventType$Pressed_getInstance});
  Object.defineProperty(XKeyEventType, 'Released', {get: XKeyEventType$Released_getInstance});
  Object.defineProperty(XKeyEventType, 'Typed', {get: XKeyEventType$Typed_getInstance});
  Object.defineProperty(XKeyEventType, 'Down', {get: XKeyEventType$Down_getInstance});
  package$gui.XKeyEventType = XKeyEventType;
  package$gui.XKeyEvent = XKeyEvent;
  Object.defineProperty(XKeyMap, 'Companion', {get: XKeyMap$Companion_getInstance});
  package$gui.XKeyMap = XKeyMap;
  package$gui.XRect = XRect;
  package$gui.XLine = XLine;
  package$gui.XText = XText;
  package$gui.XPoly = XPoly;
  var package$math = _.math || (_.math = {});
  package$math.v_lu1900$ = v;
  package$math.Vec2d = Vec2d;
  var package$sample = _.sample || (_.sample = {});
  var package$test = _.test || (_.test = {});
  var package$util = _.util || (_.util = {});
  Object.defineProperty(StatSummary, 'Companion', {get: StatSummary$Companion_getInstance});
  package$util.StatSummary = StatSummary;
  package$sample.initalizeCanvas = initalizeCanvas;
  package$sample.Dispatcher = Dispatcher;
  package$sample.GriddleTest = GriddleTest;
  package$sample.HTTPTest = HTTPTest;
  package$sample.SpeedTest = SpeedTest;
  package$sample.BasicTest = BasicTest;
  package$test.XGraphicsJS = XGraphicsJS;
  canvas = initalizeCanvas();
  test = new Dispatcher();
  main([]);
  return _;
}));

//# sourceMappingURL=JavaJSTest.js.map
