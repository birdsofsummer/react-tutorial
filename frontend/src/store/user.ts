import {
    Observer,
    isObserverBatched,
    isUsingStaticRendering,
    observerBatching,
    observerBatchingOptOut,
    useAsObservableSource,
    useLocalStore,
    useObserver,
    useStaticRendering,
    MobXProviderContext,
    PropTypes,
    Provider,
    disposeOnUnmount,
    inject,
    observer,
} from "mobx-react"

import { 
    IDerivationState,
    $mobx,
    FlowCancellationError,
    ObservableMap,
    ObservableSet,
    Reaction,
    _allowStateChanges,
    _allowStateChangesInsideComputed,
    _allowStateReadsEnd,
    _allowStateReadsStart,
    _endAction,
    _getAdministration,
    _getGlobalState,
    _interceptReads,
    _isComputingDerivation,
    _resetGlobalState,
    _startAction,
    action,
    autorun,
    comparer,
    computed,
    configure,
    createAtom,
    decorate,
    entries,
    extendObservable,
    flow,
    get,
    getAtom,
    getDebugName,
    getDependencyTree,
    getObserverTree,
    has,
    intercept,
    isAction,
    isArrayLike,
    isBoxedObservable,
    isComputed,
    isComputedProp,
    isFlowCancellationError,
    isObservable,
    isObservableArray,
    isObservableMap,
    isObservableObject,
    isObservableProp,
    isObservableSet,
    keys,
    observable,
    observe,
    onBecomeObserved,
    onBecomeUnobserved,
    onReactionError,
    reaction,
    remove,
    runInAction,
    set,
    spy,
    toJS,
    trace,
    transaction,
    untracked,
    values,
    when

} from 'mobx'


import user from "@/api/user"
import _ from "lodash/fp"






/*

id_list=[1,2,3,4,5,...]

user_map={
   1:{id:1,name:"xxx1"},
   2:{id:1,name:"xxx2"},
   3:{id:1,name:"xxx3"},
   4:{id:1,name:"xxx4"},
   5:{id:1,name:"xxx5"},
   ....
}

user_list=_.map(x=>user_map?.[x],id_list)



*/



//crud
export const userStore = observable({

  data:new Set(), //id list
  data1:{},       

  get_user(){
      return _.map(x=>this.data1[x],[...this.data])
  },

  async list() {
      let d1=await user.list()
      let d2=d1.data
      _.map('id',d2).map(x=>this.data.add(x))

      d2.forEach(x=>{
         this.data1[x.id]=x
      })
      return d2
  },

  async add(d={}){
      let r=await user.add(d)
      let id=r?.data?.id
      if (id) {
          let d1={id,...d}
          this.data1[id]=d1
          this.data.add(id)
      }else{

      }
  },

  async update(d={}){
      let r=await user.update(d)
      if (r.ok) {
        this.data1[d.id]=d
      }else{

      }
  },

  async del(id=0){
      user.del(id)
      .then(x=>{
          this.data.delete(id)
      })
      .catch(e=>{

      })
  },

})


export default userStore 
