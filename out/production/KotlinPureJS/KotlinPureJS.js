if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinPureJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinPureJS'.");
}
var KotlinPureJS = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var L0 = Kotlin.Long.ZERO;
  var numberToInt = Kotlin.numberToInt;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Random = Kotlin.kotlin.random.Random;
  var toString = Kotlin.toString;
  function DoNothingAgent(action) {
    if (action === void 0)
      action = 0;
    this.action = action;
  }
  DoNothingAgent.prototype.getAction_1n92s3$ = function (gameState, playerId) {
    return this.action;
  };
  DoNothingAgent.prototype.reset = function () {
    return this;
  };
  DoNothingAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoNothingAgent',
    interfaces: [SimplePlayerInterface]
  };
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
  function SimpleEvoAgent(flipAtLeastOneValue, probMutation, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel) {
    if (flipAtLeastOneValue === void 0)
      flipAtLeastOneValue = true;
    if (probMutation === void 0)
      probMutation = 0.3;
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
    this.random = new RandomWrapper();
    this.solutions = ArrayList_init();
    this.solution_8be2vx$ = this.randomPoint_0(this.sequenceLength);
  }
  SimpleEvoAgent.prototype.reset = function () {
    this.solution_8be2vx$ = this.randomPoint_0(this.sequenceLength);
    return this;
  };
  SimpleEvoAgent.prototype.getActions_1n92s3$ = function (gameState, playerId) {
    var tmp$;
    if (this.useShiftBuffer) {
      this.solution_8be2vx$ = this.shiftLeftAndRandomAppend_0(this.solution_8be2vx$, gameState.nActions());
    }
     else {
      this.solution_8be2vx$ = this.randomPoint_0(gameState.nActions());
    }
    this.solutions.clear();
    this.solutions.add_11rb$(this.solution_8be2vx$);
    tmp$ = this.nEvals;
    for (var i = 0; i < tmp$; i++) {
      var mut = this.mutate_0(this.solution_8be2vx$, this.probMutation, gameState.nActions());
      var curScore = this.evalSeq_0(gameState.copy(), this.solution_8be2vx$, playerId);
      var mutScore = this.evalSeq_0(gameState.copy(), mut, playerId);
      if (mutScore >= curScore) {
        this.solution_8be2vx$ = mut;
      }
      this.solutions.add_11rb$(this.solution_8be2vx$);
    }
    return this.solution_8be2vx$;
  };
  SimpleEvoAgent.prototype.mutate_0 = function (v, mutProb, nActions) {
    if (this.useMutationTransducer) {
      var mt = new MutationTransducer(mutProb, this.repeatProb);
      return mt.mutate_u4kcgn$(v, nActions);
    }
    var n = v.length;
    var x = new Int32Array(n);
    var ix = this.random.nextInt_za3lpa$(n);
    if (!this.flipAtLeastOneValue) {
      ix = -1;
    }
    for (var i = 0; i < n; i++) {
      if (i === ix || this.random.nextDouble() < mutProb) {
        x[i] = this.mutateValue_0(v[i], nActions);
      }
       else {
        x[i] = v[i];
      }
    }
    return x;
  };
  SimpleEvoAgent.prototype.mutateValue_0 = function (cur, nPossible) {
    if (nPossible <= 1)
      return cur;
    var rx = this.random.nextInt_za3lpa$(nPossible - 1 | 0);
    return rx >= cur ? rx + 1 | 0 : rx;
  };
  SimpleEvoAgent.prototype.randomPoint_0 = function (nValues) {
    var p = new Int32Array(this.sequenceLength);
    for (var i = 0; i !== p.length; ++i) {
      p[i] = this.random.nextInt_za3lpa$(nValues);
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
    p[p.length - 1 | 0] = this.random.nextInt_za3lpa$(nActions);
    return p;
  };
  SimpleEvoAgent.prototype.evalSeq_0 = function (gameState, seq, playerId) {
    var tmp$;
    if (this.discountFactor == null) {
      tmp$ = this.evalSeqNoDiscount_0(gameState, seq, playerId);
    }
     else {
      tmp$ = this.evalSeqDiscounted_0(gameState, seq, playerId, ensureNotNull(this.discountFactor));
    }
    return tmp$;
  };
  SimpleEvoAgent.prototype.evalSeqNoDiscount_0 = function (gameState, seq, playerId) {
    var tmp$;
    var gameState_0 = gameState;
    var current = gameState_0.score();
    var actions = new Int32Array(2);
    for (tmp$ = 0; tmp$ !== seq.length; ++tmp$) {
      var action = seq[tmp$];
      actions[playerId] = action;
      actions[1 - playerId | 0] = this.opponentModel.getAction_1n92s3$(gameState_0, 1 - playerId | 0);
      gameState_0 = gameState_0.next_u4kcgn$(actions, playerId);
    }
    var delta = gameState_0.score() - current;
    return playerId === 0 ? delta : -delta;
  };
  SimpleEvoAgent.prototype.evalSeqDiscounted_0 = function (gameState, seq, playerId, discountFactor) {
    var tmp$;
    var gameState_0 = gameState;
    var currentScore = gameState_0.score();
    var delta = 0.0;
    var discount = 1.0;
    var actions = new Int32Array(2);
    for (tmp$ = 0; tmp$ !== seq.length; ++tmp$) {
      var action = seq[tmp$];
      actions[playerId] = action;
      actions[1 - playerId | 0] = this.opponentModel.getAction_1n92s3$(gameState_0, 1 - playerId | 0);
      gameState_0 = gameState_0.next_u4kcgn$(actions, playerId);
      var nextScore = gameState_0.score();
      var tickDelta = nextScore - currentScore;
      currentScore = nextScore;
      delta += tickDelta * discount;
      discount *= discountFactor;
    }
    return playerId === 0 ? delta : -delta;
  };
  SimpleEvoAgent.prototype.toString = function () {
    return 'SEA: ' + this.nEvals + ' : ' + this.sequenceLength + ' : ' + this.opponentModel;
  };
  SimpleEvoAgent.prototype.getAction_1n92s3$ = function (gameState, playerId) {
    return this.getActions_1n92s3$(gameState, playerId)[0];
  };
  SimpleEvoAgent.prototype.getSolutionsCopy = function () {
    var x = ArrayList_init();
    x.addAll_brywnq$(this.solutions);
    return x;
  };
  SimpleEvoAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleEvoAgent',
    interfaces: [SimplePlayerInterface]
  };
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
  SimpleEvoAgent.prototype.copy_2d1rqs$ = function (flipAtLeastOneValue, probMutation, sequenceLength, nEvals, useShiftBuffer, useMutationTransducer, repeatProb, discountFactor, opponentModel) {
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
  function MutationTransducer(mutProb, repeatProb) {
    if (mutProb === void 0)
      mutProb = 0.2;
    if (repeatProb === void 0)
      repeatProb = 0.5;
    this.mutProb = mutProb;
    this.repeatProb = repeatProb;
    this.random = new RandomWrapper();
  }
  MutationTransducer.prototype.mutate_u4kcgn$ = function (input, range) {
    var output = new Int32Array(input.length);
    for (var i = 0; i < input.length; i++) {
      var p = this.random.nextDouble();
      if (p < this.mutProb) {
        output[i] = this.random.nextInt_za3lpa$(range);
      }
       else if (p < this.mutProb + this.repeatProb && i > 0) {
        output[i] = output[i - 1 | 0];
      }
       else {
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
  MutationTransducer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutationTransducer',
    interfaces: []
  };
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
  function Constants() {
    Constants_instance = this;
    this.doNothing = 0;
    this.left = 1;
    this.right = 2;
    this.empytyCell = 0;
  }
  Constants.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Constants',
    interfaces: []
  };
  var Constants_instance = null;
  function Constants_getInstance() {
    if (Constants_instance === null) {
      new Constants();
    }
    return Constants_instance;
  }
  function BreakoutParams(gridWidth, gridHeight, batWidth, batHeight, topGap, wallBottom, edgeGap, maxTicks, ballSpeed, ballSize, batSpeed, batInfluence) {
    if (gridWidth === void 0)
      gridWidth = 11;
    if (gridHeight === void 0)
      gridHeight = 15;
    if (batWidth === void 0)
      batWidth = 0.1;
    if (batHeight === void 0)
      batHeight = 0.05;
    if (topGap === void 0)
      topGap = 0.2;
    if (wallBottom === void 0)
      wallBottom = 0.5;
    if (edgeGap === void 0)
      edgeGap = 0.0;
    if (maxTicks === void 0)
      maxTicks = 50000;
    if (ballSpeed === void 0)
      ballSpeed = 0.01;
    if (ballSize === void 0)
      ballSize = batHeight / 4;
    if (batSpeed === void 0)
      batSpeed = 0.01;
    if (batInfluence === void 0)
      batInfluence = 2.0;
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.batWidth = batWidth;
    this.batHeight = batHeight;
    this.topGap = topGap;
    this.wallBottom = wallBottom;
    this.edgeGap = edgeGap;
    this.maxTicks = maxTicks;
    this.ballSpeed = ballSpeed;
    this.ballSize = ballSize;
    this.batSpeed = batSpeed;
    this.batInfluence = batInfluence;
  }
  BreakoutParams.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BreakoutParams',
    interfaces: []
  };
  BreakoutParams.prototype.component1 = function () {
    return this.gridWidth;
  };
  BreakoutParams.prototype.component2 = function () {
    return this.gridHeight;
  };
  BreakoutParams.prototype.component3 = function () {
    return this.batWidth;
  };
  BreakoutParams.prototype.component4 = function () {
    return this.batHeight;
  };
  BreakoutParams.prototype.component5 = function () {
    return this.topGap;
  };
  BreakoutParams.prototype.component6 = function () {
    return this.wallBottom;
  };
  BreakoutParams.prototype.component7 = function () {
    return this.edgeGap;
  };
  BreakoutParams.prototype.component8 = function () {
    return this.maxTicks;
  };
  BreakoutParams.prototype.component9 = function () {
    return this.ballSpeed;
  };
  BreakoutParams.prototype.component10 = function () {
    return this.ballSize;
  };
  BreakoutParams.prototype.component11 = function () {
    return this.batSpeed;
  };
  BreakoutParams.prototype.component12 = function () {
    return this.batInfluence;
  };
  BreakoutParams.prototype.copy_ofy3u8$ = function (gridWidth, gridHeight, batWidth, batHeight, topGap, wallBottom, edgeGap, maxTicks, ballSpeed, ballSize, batSpeed, batInfluence) {
    return new BreakoutParams(gridWidth === void 0 ? this.gridWidth : gridWidth, gridHeight === void 0 ? this.gridHeight : gridHeight, batWidth === void 0 ? this.batWidth : batWidth, batHeight === void 0 ? this.batHeight : batHeight, topGap === void 0 ? this.topGap : topGap, wallBottom === void 0 ? this.wallBottom : wallBottom, edgeGap === void 0 ? this.edgeGap : edgeGap, maxTicks === void 0 ? this.maxTicks : maxTicks, ballSpeed === void 0 ? this.ballSpeed : ballSpeed, ballSize === void 0 ? this.ballSize : ballSize, batSpeed === void 0 ? this.batSpeed : batSpeed, batInfluence === void 0 ? this.batInfluence : batInfluence);
  };
  BreakoutParams.prototype.toString = function () {
    return 'BreakoutParams(gridWidth=' + Kotlin.toString(this.gridWidth) + (', gridHeight=' + Kotlin.toString(this.gridHeight)) + (', batWidth=' + Kotlin.toString(this.batWidth)) + (', batHeight=' + Kotlin.toString(this.batHeight)) + (', topGap=' + Kotlin.toString(this.topGap)) + (', wallBottom=' + Kotlin.toString(this.wallBottom)) + (', edgeGap=' + Kotlin.toString(this.edgeGap)) + (', maxTicks=' + Kotlin.toString(this.maxTicks)) + (', ballSpeed=' + Kotlin.toString(this.ballSpeed)) + (', ballSize=' + Kotlin.toString(this.ballSize)) + (', batSpeed=' + Kotlin.toString(this.batSpeed)) + (', batInfluence=' + Kotlin.toString(this.batInfluence)) + ')';
  };
  BreakoutParams.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gridWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.gridHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.batWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.batHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.topGap) | 0;
    result = result * 31 + Kotlin.hashCode(this.wallBottom) | 0;
    result = result * 31 + Kotlin.hashCode(this.edgeGap) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxTicks) | 0;
    result = result * 31 + Kotlin.hashCode(this.ballSpeed) | 0;
    result = result * 31 + Kotlin.hashCode(this.ballSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.batSpeed) | 0;
    result = result * 31 + Kotlin.hashCode(this.batInfluence) | 0;
    return result;
  };
  BreakoutParams.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gridWidth, other.gridWidth) && Kotlin.equals(this.gridHeight, other.gridHeight) && Kotlin.equals(this.batWidth, other.batWidth) && Kotlin.equals(this.batHeight, other.batHeight) && Kotlin.equals(this.topGap, other.topGap) && Kotlin.equals(this.wallBottom, other.wallBottom) && Kotlin.equals(this.edgeGap, other.edgeGap) && Kotlin.equals(this.maxTicks, other.maxTicks) && Kotlin.equals(this.ballSpeed, other.ballSpeed) && Kotlin.equals(this.ballSize, other.ballSize) && Kotlin.equals(this.batSpeed, other.batSpeed) && Kotlin.equals(this.batInfluence, other.batInfluence)))));
  };
  var Array_0 = Array;
  function InternalGameState(params, ball, bat, score, nBricks, nTicks, gameOver) {
    if (params === void 0)
      params = new BreakoutParams();
    if (ball === void 0)
      ball = new MovableObject();
    if (bat === void 0)
      bat = Vector2d_init();
    if (score === void 0)
      score = 0;
    if (nBricks === void 0)
      nBricks = 0;
    if (nTicks === void 0)
      nTicks = 0;
    if (gameOver === void 0)
      gameOver = false;
    this.params = params;
    this.ball = ball;
    this.bat = bat;
    this.score = score;
    this.nBricks = nBricks;
    this.nTicks = nTicks;
    this.gameOver = gameOver;
    var array = Array_0(this.params.gridWidth);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int32Array(this.params.gridHeight);
    }
    this.bricks = array;
  }
  InternalGameState.prototype.initBall = function () {
    var s = Vector2d_init(0.5, this.params.wallBottom + this.params.batWidth);
    var v = Vector2d_init(this.params.ballSpeed / 2, this.params.ballSpeed);
    this.ball = new MovableObject(s, v);
    return this.ball;
  };
  InternalGameState.prototype.initBat = function () {
    var s = Vector2d_init(0.5, 1.0 - 2 * this.params.batHeight);
    this.bat = s;
    return this.bat;
  };
  InternalGameState.prototype.deepCopy = function () {
    var tmp$;
    var state = this.copy_m7rekw$();
    state.bricks = this.bricks.slice();
    state.ball = this.ball.copy();
    state.bat = this.bat.copy();
    tmp$ = this.bricks.length;
    for (var i = 0; i < tmp$; i++) {
      state.bricks[i] = this.bricks[i].slice();
    }
    return state;
  };
  InternalGameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalGameState',
    interfaces: []
  };
  InternalGameState.prototype.component1 = function () {
    return this.params;
  };
  InternalGameState.prototype.component2 = function () {
    return this.ball;
  };
  InternalGameState.prototype.component3 = function () {
    return this.bat;
  };
  InternalGameState.prototype.component4 = function () {
    return this.score;
  };
  InternalGameState.prototype.component5 = function () {
    return this.nBricks;
  };
  InternalGameState.prototype.component6 = function () {
    return this.nTicks;
  };
  InternalGameState.prototype.component7 = function () {
    return this.gameOver;
  };
  InternalGameState.prototype.copy_m7rekw$ = function (params, ball, bat, score, nBricks, nTicks, gameOver) {
    return new InternalGameState(params === void 0 ? this.params : params, ball === void 0 ? this.ball : ball, bat === void 0 ? this.bat : bat, score === void 0 ? this.score : score, nBricks === void 0 ? this.nBricks : nBricks, nTicks === void 0 ? this.nTicks : nTicks, gameOver === void 0 ? this.gameOver : gameOver);
  };
  InternalGameState.prototype.toString = function () {
    return 'InternalGameState(params=' + Kotlin.toString(this.params) + (', ball=' + Kotlin.toString(this.ball)) + (', bat=' + Kotlin.toString(this.bat)) + (', score=' + Kotlin.toString(this.score)) + (', nBricks=' + Kotlin.toString(this.nBricks)) + (', nTicks=' + Kotlin.toString(this.nTicks)) + (', gameOver=' + Kotlin.toString(this.gameOver)) + ')';
  };
  InternalGameState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    result = result * 31 + Kotlin.hashCode(this.ball) | 0;
    result = result * 31 + Kotlin.hashCode(this.bat) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    result = result * 31 + Kotlin.hashCode(this.nBricks) | 0;
    result = result * 31 + Kotlin.hashCode(this.nTicks) | 0;
    result = result * 31 + Kotlin.hashCode(this.gameOver) | 0;
    return result;
  };
  InternalGameState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.params, other.params) && Kotlin.equals(this.ball, other.ball) && Kotlin.equals(this.bat, other.bat) && Kotlin.equals(this.score, other.score) && Kotlin.equals(this.nBricks, other.nBricks) && Kotlin.equals(this.nTicks, other.nTicks) && Kotlin.equals(this.gameOver, other.gameOver)))));
  };
  var totalTicks;
  function BreakoutGameState(state) {
    if (state === void 0)
      state = new InternalGameState();
    this.state = state;
    this.brickValues = hashMapOf([to(0, 100), to(1, 100), to(2, 100), to(3, 50), to(4, 30), to(5, 20)]);
    this.defaultScore = 10;
  }
  BreakoutGameState.prototype.resetTotalTicks = function () {
    totalTicks = L0;
  };
  BreakoutGameState.prototype.totalTicks = function () {
    return totalTicks;
  };
  BreakoutGameState.prototype.copy = function () {
    return new BreakoutGameState(this.state.deepCopy());
  };
  BreakoutGameState.prototype.brickValue_za3lpa$ = function (j) {
    var score = this.brickValues.get_11rb$(j);
    if (score != null)
      return score;
    else
      return this.defaultScore;
  };
  BreakoutGameState.prototype.reset = function () {
    this.state = new InternalGameState();
    this.setUp();
    return this;
  };
  BreakoutGameState.prototype.setUp = function () {
    var $receiver = this.state;
    $receiver.ball = $receiver.initBall();
    $receiver.bat = $receiver.initBat();
    var $receiver_0 = $receiver.params;
    var tmp$, tmp$_0;
    tmp$ = $receiver_0.gridWidth;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = $receiver_0.gridHeight;
      for (var j = 0; j < tmp$_0; j++) {
        var x = (i + 0.5) / $receiver_0.gridWidth;
        var y = (j + 0.5) / $receiver_0.gridHeight;
        var isBrick = x >= $receiver_0.edgeGap && x <= 1 - $receiver_0.edgeGap && y >= $receiver_0.topGap && y <= $receiver_0.wallBottom;
        $receiver.bricks[i][j] = isBrick ? 1 : 0;
      }
    }
    return this;
  };
  var Math_0 = Math;
  BreakoutGameState.prototype.next_u4kcgn$ = function (actions, playerId) {
    var action = actions[0];
    var $receiver = this.state;
    var tmp$;
    var receiver = $receiver.params;
    var flipX = {v: false};
    var flipY = {v: false};
    var receiver_0 = this.state.ball;
    var nextS = Vector2d_init_0(receiver_0.s);
    nextS.add_kkby1b$(receiver_0.v);
    if (nextS.y >= 1.0) {
      $receiver.gameOver = true;
      $receiver.score = $receiver.score - 50 | 0;
    }
    if (nextS.x <= 0 || nextS.x >= 1)
      flipX.v = true;
    if (nextS.y <= 0 || nextS.y >= 1)
      flipY.v = true;
    var inArena = !flipX.v && !flipY.v;
    if (inArena) {
      var bx = this.gridX_14dthe$(nextS.x);
      var by = this.gridY_14dthe$(nextS.y);
      if ($receiver.bricks[bx][by] !== Constants_getInstance().empytyCell) {
        $receiver.bricks[bx][by] = Constants_getInstance().empytyCell;
        $receiver.score = $receiver.score + this.brickValue_za3lpa$(by) | 0;
        if (this.gridX_14dthe$(receiver_0.s.x) !== this.gridX_14dthe$(nextS.x))
          flipX.v = true;
        if (this.gridY_14dthe$(receiver_0.s.y) !== this.gridY_14dthe$(nextS.y))
          flipY.v = true;
      }
    }
    if (flipX.v)
      receiver_0.v.x = -receiver_0.v.x;
    if (flipY.v)
      receiver_0.v.y = -receiver_0.v.y;
    var xDiff = nextS.x - $receiver.bat.x;
    if (Math_0.abs(xDiff) < receiver.batWidth / 2 && nextS.y > $receiver.bat.y - receiver.batHeight / 2 && nextS.y < $receiver.bat.y + receiver.batHeight / 2) {
      receiver_0.v.y = -receiver.ballSpeed;
      receiver_0.v.x = xDiff * receiver.batInfluence * receiver.ballSpeed / receiver.batWidth;
    }
    receiver_0.s.add_kkby1b$(receiver_0.v);
    var receiver_1 = this.state.bat;
    if (action === Constants_getInstance().left)
      receiver_1.x -= receiver.batSpeed;
    if (action === Constants_getInstance().right)
      receiver_1.x += receiver.batSpeed;
    if (receiver_1.x >= 1.0)
      receiver_1.x = 1.0;
    if (receiver_1.x < 0.0)
      receiver_1.x = 0.0;
    tmp$ = $receiver.nTicks, $receiver.nTicks = tmp$ + 1 | 0;
    totalTicks = totalTicks.inc();
    return this;
  };
  BreakoutGameState.prototype.gridX_14dthe$ = function (x) {
    return numberToInt(x * this.state.params.gridWidth);
  };
  BreakoutGameState.prototype.gridY_14dthe$ = function (y) {
    return numberToInt(y * this.state.params.gridHeight);
  };
  BreakoutGameState.prototype.nActions = function () {
    return 3;
  };
  BreakoutGameState.prototype.score = function () {
    return this.state.score;
  };
  BreakoutGameState.prototype.isTerminal = function () {
    return this.state.gameOver || this.state.nTicks >= this.state.params.maxTicks;
  };
  BreakoutGameState.prototype.nTicks = function () {
    return this.state.nTicks;
  };
  BreakoutGameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BreakoutGameState',
    interfaces: [ExtendedAbstractGameState]
  };
  BreakoutGameState.prototype.component1 = function () {
    return this.state;
  };
  BreakoutGameState.prototype.copy_qyx8k4$ = function (state) {
    return new BreakoutGameState(state === void 0 ? this.state : state);
  };
  BreakoutGameState.prototype.toString = function () {
    return 'BreakoutGameState(state=' + Kotlin.toString(this.state) + ')';
  };
  BreakoutGameState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  BreakoutGameState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.state, other.state))));
  };
  var canvas;
  function initalizeCanvas() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    context.canvas.width = window.innerWidth;
    context.canvas.height = (2 * window.innerHeight | 0) / 3 | 0;
    ensureNotNull(document.body).appendChild(canvas);
    return canvas;
  }
  function BreakoutGameView() {
    var tmp$;
    this.context = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas.height;
    this.width = canvas.width;
    this.gameState = (new BreakoutGameState()).setUp();
    this.mousePos = new Vec2d(this.width / 2.0, 0.0);
    this.agent = new SimpleEvoAgent(void 0, 0.2, 400, 10, void 0, void 0, 0.6);
    this.humanPlayer = true;
    this.nTicks = 0;
    this.colorScheme1 = false;
    document.onkeypress = BreakoutGameView_init$lambda(this);
    document.onmousemove = BreakoutGameView_init$lambda_0(this);
    this.playerId = 0;
  }
  BreakoutGameView.prototype.gameTick = function () {
    if (this.humanPlayer) {
      this.gameState.state.bat.x = this.mousePos.x / this.width;
      this.gameState.next_u4kcgn$(new Int32Array([Constants_getInstance().doNothing]), this.playerId);
    }
     else {
      this.gameState.resetTotalTicks();
      var action = this.agent.getAction_1n92s3$(this.gameState.copy(), this.playerId);
      this.nTicks = this.gameState.totalTicks().toInt();
      this.gameState.next_u4kcgn$(new Int32Array([action]), this.playerId);
    }
    this.blank();
    this.drawWall();
    this.drawBat();
    this.drawBall();
    this.drawScore();
    if (this.gameState.isTerminal()) {
      this.gameState.reset();
      this.agent.reset();
    }
  };
  BreakoutGameView.prototype.drawBall = function () {
    var s = this.gameState.state.ball.s;
    var rad = this.gameState.state.params.ballSize;
    var cx = s.x * this.width;
    var cy = s.y * this.height;
    var pixWidth = this.width * rad;
    var pixHeight = this.height * rad;
    this.context.fillStyle = 'white';
    this.context.fillRect(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight);
  };
  BreakoutGameView.prototype.drawBat = function () {
    var params = this.gameState.state.params;
    var s = this.gameState.state.bat;
    var cx = s.x * this.width;
    var cy = s.y * this.height;
    var pixWidth = this.width * (params.batWidth - params.ballSize);
    var pixHeight = this.height * (params.batHeight - params.ballSize);
    this.context.fillStyle = 'hsl(128, 100%, 50%)';
    this.context.fillRect(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight);
  };
  BreakoutGameView.prototype.drawScore = function () {
    this.context.font = '20px Comic Sans MS';
    this.context.fillStyle = 'red';
    this.context.textAlign = 'center';
    var str = 'Score = ' + numberToInt(this.gameState.score()) + ', human = ' + this.humanPlayer;
    this.context.fillText(str, this.width / 2.0, this.height / 10.0);
    if (!this.humanPlayer) {
      var ai = 'AI ticks = ' + this.nTicks;
      this.context.textAlign = 'left';
      this.context.fillText(ai, this.height / 10.0, this.height / 10.0);
    }
  };
  BreakoutGameView.prototype.drawWall = function () {
    var $receiver = this.gameState.state;
    var tmp$, tmp$_0;
    var cellWidth = this.width / $receiver.params.gridWidth | 0;
    var cellHeight = this.height / $receiver.params.gridHeight | 0;
    tmp$ = $receiver.params.gridWidth;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = $receiver.params.gridHeight;
      for (var j = 0; j < tmp$_0; j++) {
        var cx = (i + 0.5) * cellWidth;
        var cy = (j + 0.5) * cellHeight;
        var pixWidth = cellWidth - this.width * $receiver.params.ballSize;
        var pixHeight = cellHeight - this.height * $receiver.params.ballSize;
        this.context.fillStyle = 'rgba(0, 0, 0, 0.1)';
        if ($receiver.bricks[i][j] !== Constants_getInstance().empytyCell) {
          if (this.colorScheme1) {
            this.brickColor1_za3lpa$(j);
          }
           else {
            this.brickColor2_za3lpa$(j);
          }
        }
        this.context.fillRect(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight);
      }
    }
  };
  BreakoutGameView.prototype.brickColor1_za3lpa$ = function (j) {
    var brickHue = (j * 500 | 0) / this.gameState.state.params.gridHeight | 0;
    this.context.fillStyle = 'hsl(' + brickHue + ', 100%, 60%)';
  };
  BreakoutGameView.prototype.brickColor2_za3lpa$ = function (j) {
    var p = this.gameState.state.params;
    var ratio = (j / p.gridHeight - p.topGap) / (p.wallBottom - p.topGap);
    var brickHue = numberToInt((0.1 + ratio * 0.8) * 360);
    this.context.fillStyle = 'hsl(' + brickHue + ', 100%, 60%)';
  };
  BreakoutGameView.prototype.blank = function () {
    this.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.context.fillRect(0.0, 0.0, this.width, this.height);
  };
  function BreakoutGameView$run$lambda(this$BreakoutGameView) {
    return function () {
      this$BreakoutGameView.gameTick();
      return Unit;
    };
  }
  BreakoutGameView.prototype.run = function () {
    window.setInterval(BreakoutGameView$run$lambda(this), 20);
  };
  function BreakoutGameView_init$lambda(this$BreakoutGameView) {
    return function (e) {
      this$BreakoutGameView.humanPlayer = !this$BreakoutGameView.humanPlayer;
      if (Kotlin.isType(e, KeyboardEvent)) {
        if (equals(e.key, 'a'))
          this$BreakoutGameView.colorScheme1 = !this$BreakoutGameView.colorScheme1;
        println(e.key);
      }
      println('Key pressed document event');
      return Unit;
    };
  }
  function BreakoutGameView_init$lambda_0(this$BreakoutGameView) {
    return function (it) {
      println(it.type);
      if (Kotlin.isType(it, MouseEvent)) {
        var mx = it.pageX - canvas.offsetLeft;
        if (mx < 0)
          mx - 0;
        if (mx > (this$BreakoutGameView.width - 1 | 0))
          mx = this$BreakoutGameView.width - 1.0;
        this$BreakoutGameView.mousePos = new Vec2d(mx, it.pageY - canvas.offsetTop);
      }
      return Unit;
    };
  }
  BreakoutGameView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BreakoutGameView',
    interfaces: []
  };
  function SimplePlayerInterface() {
  }
  SimplePlayerInterface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SimplePlayerInterface',
    interfaces: []
  };
  function AbstractGameState() {
  }
  AbstractGameState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AbstractGameState',
    interfaces: []
  };
  function ExtendedAbstractGameState() {
  }
  ExtendedAbstractGameState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ExtendedAbstractGameState',
    interfaces: [AbstractGameState]
  };
  function MovableObject(s, v) {
    if (s === void 0)
      s = Vector2d_init();
    if (v === void 0)
      v = Vector2d_init();
    this.s = s;
    this.v = v;
  }
  MovableObject.prototype.update_c0y6xt$ = function (resultantForce, lossFactor) {
    this.v.add_kkby1b$(resultantForce);
    this.s.add_kkby1b$(this.v);
    this.v.mul_14dthe$(lossFactor);
    return this;
  };
  MovableObject.prototype.toString = function () {
    return this.s.toString() + ' : ' + this.v;
  };
  MovableObject.prototype.copy = function () {
    return new MovableObject(this.s.copy(), this.v.copy());
  };
  MovableObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovableObject',
    interfaces: []
  };
  MovableObject.prototype.component1 = function () {
    return this.s;
  };
  MovableObject.prototype.component2 = function () {
    return this.v;
  };
  MovableObject.prototype.copy_cfxg1e$ = function (s, v) {
    return new MovableObject(s === void 0 ? this.s : s, v === void 0 ? this.v : v);
  };
  MovableObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  MovableObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.s, other.s) && Kotlin.equals(this.v, other.v)))));
  };
  function RandomWrapper() {
  }
  RandomWrapper.prototype.nextInt_za3lpa$ = function (range) {
    return Random.Default.nextInt_za3lpa$(range);
  };
  RandomWrapper.prototype.nextDouble = function () {
    return Random.Default.nextDouble();
  };
  RandomWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomWrapper',
    interfaces: []
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
  Vec2d.prototype.plus_j6393o$ = function (v_0) {
    return v(this.x + v_0.x, this.y + v_0.y);
  };
  Vec2d.prototype.unaryMinus = function () {
    return v(-this.x, -this.y);
  };
  Vec2d.prototype.minus_j6393o$ = function (v_0) {
    return v(this.x - v_0.x, this.y - v_0.y);
  };
  Vec2d.prototype.times_14dthe$ = function (koef) {
    return v(this.x * koef, this.y * koef);
  };
  Vec2d.prototype.distanceTo_j6393o$ = function (v) {
    var x = this.minus_j6393o$(v).sqr;
    return Math_0.sqrt(x);
  };
  Vec2d.prototype.rotatedBy_14dthe$ = function (theta) {
    var sin = Math_0.sin(theta);
    var cos = Math_0.cos(theta);
    return v(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
  };
  Vec2d.prototype.isInRect_miaiek$ = function (topLeft, size) {
    return this.x >= topLeft.x && this.x <= topLeft.x + size.x && this.y >= topLeft.y && this.y <= topLeft.y + size.y;
  };
  Object.defineProperty(Vec2d.prototype, 'sqr', {
    get: function () {
      return this.x * this.x + this.y * this.y;
    }
  });
  Object.defineProperty(Vec2d.prototype, 'normalized', {
    get: function () {
      var x = this.sqr;
      return this.times_14dthe$(1.0 / Math_0.sqrt(x));
    }
  });
  Vec2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2d',
    interfaces: []
  };
  function Vector2d() {
    this.x = 0;
    this.y = 0;
  }
  Vector2d.prototype.equals = function (o) {
    var tmp$;
    if (Kotlin.isType(o, Vector2d)) {
      var v = (tmp$ = o) == null || Kotlin.isType(tmp$, Vector2d) ? tmp$ : throwCCE();
      return this.x === ensureNotNull(v).x && this.y === v.y;
    }
     else {
      return false;
    }
  };
  Vector2d.prototype.copy = function () {
    return Vector2d_init(this.x, this.y);
  };
  Vector2d.prototype.set_kkby1b$ = function (v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  };
  Vector2d.prototype.set_lu1900$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Vector2d.prototype.zero = function () {
    this.x = 0.0;
    this.y = 0.0;
    return this;
  };
  Vector2d.prototype.toString = function () {
    return this.x.toString() + ' : ' + toString(this.y);
  };
  Vector2d.prototype.add_kkby1b$ = function (v) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
    return this;
  };
  Vector2d.prototype.add_lu1900$ = function (x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    return this;
  };
  Vector2d.prototype.add_c0y6xt$ = function (v, w) {
    this.x = this.x + w * v.x;
    this.y = this.y + w * v.y;
    return this;
  };
  Vector2d.prototype.wrap_lu1900$ = function (w, h) {
    this.x = (this.x + w) % w;
    this.y = (this.y + h) % h;
    return this;
  };
  Vector2d.prototype.subtract_kkby1b$ = function (v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
    return this;
  };
  Vector2d.prototype.subtract_lu1900$ = function (x, y) {
    this.x = this.x - x;
    this.y = this.y - y;
    return this;
  };
  Vector2d.prototype.mul_14dthe$ = function (fac) {
    this.x *= fac;
    this.y *= fac;
    return this;
  };
  Vector2d.prototype.rotate_14dthe$ = function (theta) {
    var cosTheta = Math_0.cos(theta);
    var sinTheta = Math_0.sin(theta);
    var nx = this.x * cosTheta - this.y * sinTheta;
    var ny = this.x * sinTheta + this.y * cosTheta;
    this.x = nx;
    this.y = ny;
    return this;
  };
  Vector2d.prototype.contraRotate_cfxg1e$ = function (start, end) {
    var r = start.dist_kkby1b$(end);
    var cosTheta = (end.x - start.x) / r;
    var sinTheta = (end.y - start.y) / r;
    var nx = this.x * cosTheta + this.y * sinTheta;
    var ny = -this.x * sinTheta + this.y * cosTheta;
    this.x = nx;
    this.y = ny;
    return this;
  };
  Vector2d.prototype.contraRotate_kkby1b$ = function (heading) {
    var r = heading.mag();
    var cosTheta = heading.y / r;
    var sinTheta = heading.x / r;
    var nx = this.x * cosTheta + this.y * sinTheta;
    var ny = -this.x * sinTheta + this.y * cosTheta;
    this.x = nx;
    this.y = ny;
    return this;
  };
  Vector2d.prototype.sqr_14dthe$ = function (x) {
    return x * x;
  };
  Vector2d.prototype.scalarProduct_kkby1b$ = function (v) {
    return this.x * v.x + this.y * v.y;
  };
  Vector2d.prototype.sqDist_kkby1b$ = function (v) {
    return this.sqr_14dthe$(this.x - v.x) + this.sqr_14dthe$(this.y - v.y);
  };
  Vector2d.prototype.mag = function () {
    var x = this.sqr_14dthe$(this.x) + this.sqr_14dthe$(this.y);
    return Math_0.sqrt(x);
  };
  Vector2d.prototype.dist_kkby1b$ = function (v) {
    var x = this.sqDist_kkby1b$(v);
    return Math_0.sqrt(x);
  };
  Vector2d.prototype.theta = function () {
    var y = this.y;
    var x = this.x;
    return Math_0.atan2(y, x);
  };
  Vector2d.prototype.normalise = function () {
    var mag = this.mag();
    if (mag !== 0.0) {
      this.x /= mag;
      this.y /= mag;
    }
  };
  Vector2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector2d',
    interfaces: []
  };
  function Vector2d_init(x, y, $this) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    $this = $this || Object.create(Vector2d.prototype);
    Vector2d.call($this);
    $this.x = x;
    $this.y = y;
    return $this;
  }
  function Vector2d_init_0(v, $this) {
    $this = $this || Object.create(Vector2d.prototype);
    Vector2d.call($this);
    $this.x = v.x;
    $this.y = v.y;
    return $this;
  }
  function main$lambda() {
    (new RandomNumberTest()).run();
    (new BreakoutGameView()).run();
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  var canvas_0;
  function initalizeCanvas_0() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight / 2 | 0;
    ensureNotNull(document.body).appendChild(canvas);
    return canvas;
  }
  function RandomNumberTest() {
    var tmp$;
    this.context = Kotlin.isType(tmp$ = canvas_0.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = canvas_0.height;
    this.width = canvas_0.width;
    this.rand = new RandTest();
    this.random = new RandomWrapper();
    this.gameState = new BreakoutGameState();
    this.agent = new SimpleEvoAgent();
  }
  RandomNumberTest.prototype.update = function () {
    var str = 'Roll = ' + (1 + this.random.nextInt_za3lpa$(6) | 0);
    this.context.clearRect(0.0, 0.0, this.width, this.height);
    this.context.font = '30px Comic Sans MS';
    this.context.fillStyle = 'red';
    this.context.textAlign = 'center';
    this.context.fillText(str, this.width / 2, this.height / 10);
  };
  RandomNumberTest.prototype.testForwardModel = function () {
    var playerId = 0;
    var date = new Date();
    this.gameState.reset();
    var n = 100000;
    var lazyAgent = new DoNothingAgent();
    var scoreTot = 0.0;
    for (var i = 0; i < n; i++) {
      var action = lazyAgent.getAction_1n92s3$(this.gameState, playerId);
      this.gameState.next_u4kcgn$(new Int32Array([action]), playerId);
      scoreTot += this.gameState.score();
      if (this.gameState.isTerminal())
        this.gameState.reset();
    }
    var elapsed = (new Date()).getMilliseconds() - date.getMilliseconds();
    this.context.font = '20px Comic Sans MS';
    this.context.fillStyle = 'red';
    this.context.textAlign = 'center';
    var str = 'Elapsed ' + elapsed + 'ms for ' + n + ' game ticks; = ' + numberToInt(n * 0.001 / elapsed) + 'mTicks / s';
    this.context.fillText(str, this.width / 2, this.height / 2);
  };
  function RandomNumberTest$run$lambda(this$RandomNumberTest) {
    return function () {
      this$RandomNumberTest.update();
      return Unit;
    };
  }
  RandomNumberTest.prototype.run = function () {
    window.setInterval(RandomNumberTest$run$lambda(this), 1000);
  };
  RandomNumberTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomNumberTest',
    interfaces: []
  };
  function RandTest() {
  }
  RandTest.prototype.testRand = function () {
    return Random.Default.nextInt_za3lpa$(10);
  };
  RandTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandTest',
    interfaces: []
  };
  var package$agentsJS = _.agentsJS || (_.agentsJS = {});
  package$agentsJS.DoNothingAgent = DoNothingAgent;
  package$agentsJS.SimpleEvoAgent = SimpleEvoAgent;
  package$agentsJS.MutationTransducer = MutationTransducer;
  var package$breakoutJS = _.breakoutJS || (_.breakoutJS = {});
  Object.defineProperty(package$breakoutJS, 'Constants', {
    get: Constants_getInstance
  });
  package$breakoutJS.BreakoutParams = BreakoutParams;
  package$breakoutJS.InternalGameState = InternalGameState;
  Object.defineProperty(package$breakoutJS, 'totalTicks', {
    get: function () {
      return totalTicks;
    },
    set: function (value) {
      totalTicks = value;
    }
  });
  package$breakoutJS.BreakoutGameState = BreakoutGameState;
  Object.defineProperty(package$breakoutJS, 'canvas', {
    get: function () {
      return canvas;
    }
  });
  package$breakoutJS.initalizeCanvas = initalizeCanvas;
  package$breakoutJS.BreakoutGameView = BreakoutGameView;
  var package$ggiJS = _.ggiJS || (_.ggiJS = {});
  package$ggiJS.SimplePlayerInterface = SimplePlayerInterface;
  package$ggiJS.AbstractGameState = AbstractGameState;
  package$ggiJS.ExtendedAbstractGameState = ExtendedAbstractGameState;
  var package$mymath = _.mymath || (_.mymath = {});
  package$mymath.MovableObject = MovableObject;
  package$mymath.RandomWrapper = RandomWrapper;
  package$mymath.v_lu1900$ = v;
  package$mymath.Vec2d = Vec2d;
  package$mymath.Vector2d_init_lu1900$ = Vector2d_init;
  package$mymath.Vector2d_init_kkby1b$ = Vector2d_init_0;
  package$mymath.Vector2d = Vector2d;
  var package$test = _.test || (_.test = {});
  package$test.main_kand9s$ = main;
  Object.defineProperty(package$test, 'canvas', {
    get: function () {
      return canvas_0;
    }
  });
  package$test.initalizeCanvas = initalizeCanvas_0;
  package$test.RandomNumberTest = RandomNumberTest;
  package$test.RandTest = RandTest;
  totalTicks = L0;
  canvas = initalizeCanvas();
  canvas_0 = initalizeCanvas_0();
  main([]);
  Kotlin.defineModule('KotlinPureJS', _);
  return _;
}(typeof KotlinPureJS === 'undefined' ? {} : KotlinPureJS, kotlin);
