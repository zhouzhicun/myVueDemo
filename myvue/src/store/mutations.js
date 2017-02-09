import * as types from './mutation-types'

export default {

	[types.SUBSCRIBE_MP] (state, mp) {

		state.subscribeList.push(mp);

		for (let item of state.mpList) {
			
			if (item.weixinhao == mp.weixinhao) {

				var idx = state.mpList.indexOf(item);
				State.mpList[idx].isSubscribed = true;
				break;
			}
		}
	}

}