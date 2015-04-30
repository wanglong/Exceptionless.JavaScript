import { Configuration } from './configuration/Configuration';
import { IConfigurationSettings } from './configuration/IConfigurationSettings';
import { ILastReferenceIdManager } from './lastReferenceIdManager/ILastReferenceIdManager';
import { InMemoryLastReferenceIdManager } from './lastReferenceIdManager/InMemoryLastReferenceIdManager';
import { ConsoleLog } from './logging/ConsoleLog';
import { ILog } from './logging/ILog';
import { NullLog } from './logging/NullLog';
import { IError } from './models/IError';
import { IEvent } from './models/IEvent';
import { IInnerError } from './models/IInnerError';
import { IMethod } from './models/IMethod';
import { IModule } from './models/IModule';
import { IParameter } from './models/IParameter';
import { IRequestInfo } from './models/IRequestInfo';
import { IStackFrame } from './models/IStackFrame';
import { IUserDescription } from './models/IUserDescription';
import { ContextData } from './plugins/ContextData';
import { EventPluginContext } from './plugins/EventPluginContext';
import { EventPluginManager } from './plugins/EventPluginManager';
import { IEventPlugin } from './plugins/IEventPlugin';
import { ConfigurationDefaultsPlugin } from './plugins/default/ConfigurationDefaultsPlugin';
import { DuplicateCheckerPlugin } from './plugins/default/DuplicateCheckerPlugin';
import { ErrorPlugin } from './plugins/default/ErrorPlugin';
import { ModuleInfoPlugin } from './plugins/default/ModuleInfoPlugin';
import { ReferenceIdPlugin } from './plugins/default/ReferenceIdPlugin';
import { RequestInfoPlugin } from './plugins/default/RequestInfoPlugin';
import { SubmissionMethodPlugin } from './plugins/default/SubmissionMethodPlugin';
import { DefaultEventQueue } from './queue/DefaultEventQueue';
import { IEventQueue } from './queue/IEventQueue';
import { InMemoryStorage } from './storage/InMemoryStorage';
import { IStorage } from './storage/IStorage';
import { ISubmissionClient } from './submission/ISubmissionClient';
import { NodeSubmissionClient } from './submission/NodeSubmissionClient';
import { SettingsResponse } from './submission/SettingsResponse';
import { SubmissionResponse } from './submission/SubmissionResponse';
import { EventBuilder } from 'EventBuilder';
import { ExceptionlessClient } from 'ExceptionlessClient';
import { Utils } from 'Utils';

Configuration.defaults.submissionClient = new NodeSubmissionClient();