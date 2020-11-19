import {GET_CAMPAIGNS_SUCCESS,GET_CAMPAIGNS_FAILURE,EDIT_CAMPAIGNS_SUCCESS,EDIT_CAMPAIGNS_FAILURE} from '../actions/types';
const initialState = {
    campaigns:[
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
        {campaignName:"Bolt",
        campaignMessage:"Congratulations, you have won an R100 in the Bolt Competition, to be eligible for your prize please send your ID copy via WhatsApp it to 0845635440",
        account:"Vetro Media",contactList:"Bolt(15)",status:"Finished",dateCreated:"2020-10-16 10:59:06"},
    ],
    errors:false
  };
    
    export default function campaigns (state = initialState, action) {
      switch (action.type) {
        case GET_CAMPAIGNS_SUCCESS :
          return {
            ...state,
            campaigns: action.payload,
            errors: false
          };
    
        case GET_CAMPAIGNS_FAILURE :
          return {
            ...state,
            errors:true,
          };
         case EDIT_CAMPAIGNS_SUCCESS : 
             return {
               ...state,
             }
        case EDIT_CAMPAIGNS_FAILURE : 
             return {
              ...state,
              errors:true,
             }
        default:
          return state;
      }
    }