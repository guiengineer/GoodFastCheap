function getCurrentState(g,f,c)
{
	var cs = 0;
	if(g===true)cs+=4;
	if(f===true)cs+=2;
	if(c===true)cs+=1;
	return cs;
}

function getNextValueFor(id, currentState, action_type)
{
	switch(id)
	{
		case 'good':
		{
			switch(currentState)
			{
				case 0:
				case 3:
				{
					switch(action_type)
					{
						case 'toggleGood': return true; break;
						default:  return false; break;
					}
				}break;
				case 4:
				{
					switch(action_type)
					{
						case 'toggleFast': return true; break;
						default:  return false; break;
					}
				}break;
				case 6:
				{
					switch(action_type)
					{
						case 'toggleCheap': return true; break;
						default:  return false; break;
					}
				}break;
				default:  return false; break;
			}
		}break;

		case 'fast':
		{
			switch(currentState)
			{
				case 4:
				{
					switch(action_type)
					{
						case 'toggleFast': return true; break;
						default:  return false; break;
					}
				}break;

				case 5:
				{
					switch(action_type)
					{
						case 'toggleFast': return true; break;
						default:  return false; break;
					}
				}break;
				case 3:
				{
					switch(action_type)
					{
						case 'toggleGood': return true; break;
						default:  return false; break;
					}
				}break;
				default:  return false; break;
			}
		}break;

		case 'cheap':
		{
			switch(currentState)
			{
				case 6:
				{
					switch(action_type)
					{
						case 'toggleCheap': return true; break;
						default:  return false; break;
					}
				}break;
				case 5:
				{
					switch(action_type)
					{
						case 'toggleFast': return true; break;
						default:  return false; break;
					}
				}break;
				default:  return false; break;
			}
		}break;
		
		default: break;
	}

	return false;
}

function getColor(tf, colorOn, pv)
{
	var target = 128;
	switch(colorOn)
	{
		case 'red': 	return 'rgb('+(target+pv)+','+(128-pv)   +','+(128-pv)   +')'; break;
		case 'green': 	return 'rgb('+(128-pv)   +','+(target+pv)+','+(128-pv)   +')'; break;
		case 'blue': 	return 'rgb('+(128-pv)   +','+(128-pv)   +','+(target+pv)+')'; break;
		default: break;
	}
	
	return 'orange';
}

function getPosValue(offOn, currValue, p)
{
	var ret = currValue;
	if(offOn===true)
	{
		if(currValue<128)
			ret = p;
	}
	else
	{
		if(currValue>0)
			ret = 128 - p;
	}
	return ret;
}

function app_store(state, action)  
{
	if(state===undefined)
		return {
					pos: 0,
					goodOn: false,
					fastOn: false,
					cheapOn: false,
					isTogglingGood: false,
					isTogglingFast: false,
					isTogglingCheap: false,
					colorGood: 'rgb(128,128,128)',
					colorFast: 'rgb(128,128,128)',
					colorCheap: 'rgb(128,128,128)',
					colorForOnGood: 'green',
					colorForOnFast: 'blue',
					colorForOnCheap: 'red',
					posValueGood: 0,
					posValueFast: 0,
					posValueCheap: 0,
				};
	
	switch(action.type)
	{
		case 'move':
		{
			var pos = state.pos +32;
			
			var g = getPosValue(state.goodOn,  state.posValueGood,  pos);
			var f = getPosValue(state.fastOn,  state.posValueFast,  pos);
			var c = getPosValue(state.cheapOn, state.posValueCheap, pos);
			
			var gg = getColor(state.goodOn,  state.colorForOnGood,  g,  pos);
			var ff = getColor(state.fastOn,  state.colorForOnFast,  f,  pos);
			var cc = getColor(state.cheapOn, state.colorForOnCheap, c, 	pos);
			
			return {...state, 	pos: 			pos,
								posValueGood:  	g,
								posValueFast:  	f,
								posValueCheap: 	c,
								colorGood:  	gg,
								colorFast:  	ff,
								colorCheap: 	cc,
			};
		}break;
			
		case 'toggleGood': 
		case 'toggleFast': 
		case 'toggleCheap':{
			var currentState = getCurrentState(state.goodOn,state.fastOn,state.cheapOn);
			var g = getNextValueFor('good',  currentState, action.type);
			var f = getNextValueFor('fast',  currentState, action.type);
			var c = getNextValueFor('cheap', currentState, action.type);

				return {...state, 
							pos: 0,
							goodOn:  g, isTogglingGood:  g!==state.goodOn,
							fastOn:  f, isTogglingFast:  f!==state.fastOn,
							cheapOn: c, isTogglingCheap: c!==state.cheapOn,
						}; 
			}break;
		case 'stopTogglingGood':  return {...state, isTogglingGood:  false }; break;
		case 'stopTogglingFast':  return {...state, isTogglingFast:  false }; break;
		case 'stopTogglingCheap': return {...state, isTogglingCheap: false }; break;
		default: break;
	}
	return state;
}

export default app_store;
