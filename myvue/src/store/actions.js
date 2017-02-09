// actions.js

import * as types from './mutation-types'

export default {

	subscribeMp({ commit }, mp) {

		commit(types.SUBSCRIBE_MP, mp)
	},

	unsubscribeMp({ commit }, mp) {
		commit(types.UNSUBSCRIBE_MP, mp)
	},

	addSearchResultList({ commit }, mp) {

		commit(types.ADDSEARCHRESULTLIST, mp)
	},

  sayHello({ commit }, mp) {

	  commit(types.ADD_SEARCHRESULT_LIST, mp);
  }

  sayByeBye({ commit }, mp) {

	  commit(types.UNSUBSCRIBE_MP, mp);
  }




}
