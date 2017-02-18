import {guid, crashGuid} from '../util/guid'
import opbeat from '../opbeat'

export default async (req, res) => {
  const number = Math.random()
  try {
    const uuid = number > 0.5 ? await guid() : await crashGuid()
    res.json({number, uuid})
  } catch (err) {
    opbeat.captureError(err)
    res.json({error: err.message})
  }
}
