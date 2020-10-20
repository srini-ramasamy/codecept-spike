/* eslint-disable babel/no-invalid-this */
// import { Hooks, StepDefinitions } from 'cucumber';
import { scope, wrap } from './support';

// type AfterArgs = Parameters<Hooks['After']>;
// type BeforeArgs = Parameters<Hooks['Before']>;
// type WhenArgs = Parameters<StepDefinitions['When']>;
// type ThenArgs = Parameters<StepDefinitions['Then']>;
// type GivenArgs = Parameters<StepDefinitions['Given']>;
// type SetDefaultTimeoutArgs = Parameters<StepDefinitions['setDefaultTimeout']>;

/**
 * This wrapper allows us to write our current Cucumber v2 step definitions in the new Cucumber
 * v4 syntax.
 *
 * This means that the codebase can support both syntax styles and we can upgrade the codebase piece
 * by piece. Once all of the steps have been converted we can then upgrade Cucumber in the
 * background and quietly remove this file.
 */
export const createCucumberWrapper = () => {

    function stepDefinitions() {}
    
    const GivenCall = (...args) => {
        args[1] = wrap(args[1]);
        Given.apply(this, args);
    }; 
    const ThenCall = (...args) => {
        args[1] = wrap(args[1]);
        Then.apply(this, args);
    };
    const WhenCall = (...args) => {
        args[1] = wrap(args[1]);
        When.apply(this, args);
    };

    return {
    stepDefinitions,
      When: WhenCall as CodeceptJS.When,
      Then: ThenCall as CodeceptJS.Then,
      Given: GivenCall as CodeceptJS.Given,
      Before: Before as CodeceptJS.Before,
      After: After as CodeceptJS.After,
    };
//   if (process.env['CODECEPT']) {
//   }
//   else {
//     const AfterCalls: AfterArgs[] = [];
//     const BeforeCalls: BeforeArgs[] = [];
//     const WhenCalls: WhenArgs[] = [];
//     const ThenCalls: ThenArgs[] = [];
//     const GivenCalls: GivenArgs[] = [];
//     const setDefaultTimeoutCalls: SetDefaultTimeoutArgs[] = [];

//     function stepDefinitions(this: StepDefinitions & Hooks) {
//       AfterCalls.forEach((args: AfterArgs) => this.After.apply(this, args));
//       BeforeCalls.forEach((args: BeforeArgs) => this.Before.apply(this, args));
//       WhenCalls.forEach((args: WhenArgs) => this.When.apply(this, args));
//       ThenCalls.forEach((args: ThenArgs) => this.Then.apply(this, args));
//       GivenCalls.forEach((args: GivenArgs) => this.Given.apply(this, args));
//       setDefaultTimeoutCalls.forEach((args: SetDefaultTimeoutArgs) => this.setDefaultTimeout.apply(this, args));
//     }

//     const After = (...args: AfterArgs) => AfterCalls.push(args);

//     const Before = (...args: BeforeArgs) => BeforeCalls.push(args);

//     const When = (...args: WhenArgs) => WhenCalls.push(args);

//     const Then = (...args: ThenArgs) => ThenCalls.push(args);

//     const Given = (...args: GivenArgs) => GivenCalls.push(args);

//     const setDefaultTimeout = (...args: SetDefaultTimeoutArgs) => setDefaultTimeoutCalls.push(args);

//     return {
//       stepDefinitions,
//       After: After as any as Hooks['After'],
//       Before: Before as any as Hooks['Before'],
//       When: When as StepDefinitions['When'],
//       Then: Then as StepDefinitions['Then'],
//       Given: Given as StepDefinitions['Given'],
//       setDefaultTimeout,
//     };
//   }
};
