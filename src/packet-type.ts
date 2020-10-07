/**
 * A strongly typed representation of the packet types.
 */
export enum PacketType {
  FAILURE = 'FAILURE',
  CREATE_SUCCESS = 'CREATE_SUCCESS',
  CREATE = 'CREATE',
  PLAYERSHOOT = 'PLAYERSHOOT',
  MOVE = 'MOVE',
  PLAYERTEXT = 'PLAYERTEXT',
  TEXT = 'TEXT',
  SERVERPLAYERSHOOT = 'SERVERPLAYERSHOOT',
  DAMAGE = 'DAMAGE',
  UPDATE = 'UPDATE',
  UPDATEACK = 'UPDATEACK',
  NOTIFICATION = 'NOTIFICATION',
  NEWTICK = 'NEWTICK',
  INVSWAP = 'INVSWAP',
  USEITEM = 'USEITEM',
  SHOWEFFECT = 'SHOWEFFECT',
  HELLO = 'HELLO',
  GOTO = 'GOTO',
  INVDROP = 'INVDROP',
  INVRESULT = 'INVRESULT',
  RECONNECT = 'RECONNECT',
  PING = 'PING',
  PONG = 'PONG',
  MAPINFO = 'MAPINFO',
  LOAD = 'LOAD',
  PIC = 'PIC',
  SETCONDITION = 'SETCONDITION',
  TELEPORT = 'TELEPORT',
  USEPORTAL = 'USEPORTAL',
  DEATH = 'DEATH',
  BUY = 'BUY',
  BUYRESULT = 'BUYRESULT',
  AOE = 'AOE',
  GROUNDDAMAGE = 'GROUNDDAMAGE',
  PLAYERHIT = 'PLAYERHIT',
  ENEMYHIT = 'ENEMYHIT',
  AOEACK = 'AOEACK',
  SHOOTACK = 'SHOOTACK',
  OTHERHIT = 'OTHERHIT',
  SQUAREHIT = 'SQUAREHIT',
  GOTOACK = 'GOTOACK',
  EDITACCOUNTLIST = 'EDITACCOUNTLIST',
  ACCOUNTLIST = 'ACCOUNTLIST',
  QUESTOBJID = 'QUESTOBJID',
  CHOOSENAME = 'CHOOSENAME',
  NAMERESULT = 'NAMERESULT',
  CREATEGUILD = 'CREATEGUILD',
  GUILDRESULT = 'GUILDRESULT',
  GUILDREMOVE = 'GUILDREMOVE',
  GUILDINVITE = 'GUILDINVITE',
  ALLYSHOOT = 'ALLYSHOOT',
  ENEMYSHOOT = 'ENEMYSHOOT',
  REQUESTTRADE = 'REQUESTTRADE',
  TRADEREQUESTED = 'TRADEREQUESTED',
  TRADESTART = 'TRADESTART',
  CHANGETRADE = 'CHANGETRADE',
  TRADECHANGED = 'TRADECHANGED',
  ACCEPTTRADE = 'ACCEPTTRADE',
  CANCELTRADE = 'CANCELTRADE',
  TRADEDONE = 'TRADEDONE',
  TRADEACCEPTED = 'TRADEACCEPTED',
  CLIENTSTAT = 'CLIENTSTAT',
  CHECKCREDITS = 'CHECKCREDITS',
  ESCAPE = 'ESCAPE',
  FILE = 'FILE',
  INVITEDTOGUILD = 'INVITEDTOGUILD',
  JOINGUILD = 'JOINGUILD',
  CHANGEGUILDRANK = 'CHANGEGUILDRANK',
  PLAYSOUND = 'PLAYSOUND',
  GLOBAL_NOTIFICATION = 'GLOBAL_NOTIFICATION',
  RESKIN = 'RESKIN',
  PETUPGRADEREQUEST = 'PETUPGRADEREQUEST',
  ACTIVE_PET_UPDATE_REQUEST = 'ACTIVE_PET_UPDATE_REQUEST',
  ACTIVEPETUPDATE = 'ACTIVEPETUPDATE',
  NEW_ABILITY = 'NEW_ABILITY',
  PETYARDUPDATE = 'PETYARDUPDATE',
  EVOLVE_PET = 'EVOLVE_PET',
  DELETE_PET = 'DELETE_PET',
  HATCH_PET = 'HATCH_PET',
  ENTER_ARENA = 'ENTER_ARENA',
  IMMINENT_ARENA_WAVE = 'IMMINENT_ARENA_WAVE',
  ARENA_DEATH = 'ARENA_DEATH',
  ACCEPT_ARENA_DEATH = 'ACCEPT_ARENA_DEATH',
  VERIFY_EMAIL = 'VERIFY_EMAIL',
  RESKIN_UNLOCK = 'RESKIN_UNLOCK',
  PASSWORD_PROMPT = 'PASSWORD_PROMPT',
  QUEST_FETCH_ASK = 'QUEST_FETCH_ASK',
  QUEST_REDEEM = 'QUEST_REDEEM',
  QUEST_FETCH_RESPONSE = 'QUEST_FETCH_RESPONSE',
  QUEST_REDEEM_RESPONSE = 'QUEST_REDEEM_RESPONSE',
  PET_CHANGE_FORM_MSG = 'PET_CHANGE_FORM_MSG',
  KEY_INFO_REQUEST = 'KEY_INFO_REQUEST',
  KEY_INFO_RESPONSE = 'KEY_INFO_RESPONSE',
  CLAIM_LOGIN_REWARD_MSG = 'CLAIM_LOGIN_REWARD_MSG',
  LOGIN_REWARD_MSG = 'LOGIN_REWARD_MSG',
  QUEST_ROOM_MSG = 'QUEST_ROOM_MSG',
  PET_CHANGE_SKIN_MSG = 'PET_CHANGE_SKIN_MSG',
  REALM_HERO_LEFT_MSG = 'REALM_HERO_LEFT_MSG',
  RESET_DAILY_QUESTS = 'RESET_DAILY_QUESTS',
}