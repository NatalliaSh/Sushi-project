import { start } from './modules/start.js';
import './modules/handlers/windowPopState.js';
import { windowEventHandler } from './modules/handlers/windowEventHandler.js';
import { btnChoiceHandler } from './modules/handlers/btnChoiceHandler.js';
import { btnPlusMinusInputHandler } from './modules/handlers/btnPlusMinusInputHandler.js';

start();

windowEventHandler.register(btnChoiceHandler, 'newChoiseBtn', 'click');
windowEventHandler.register(btnChoiceHandler, 'popularChoiseBtn', 'click');

windowEventHandler.register(btnPlusMinusInputHandler, 'minusBtn', 'click');
windowEventHandler.register(btnPlusMinusInputHandler, 'plusBtn', 'click');
