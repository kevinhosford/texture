import TextureConfigurator from '../../TextureConfigurator'
import DocumentSession from '../../shared/DocumentSession'
import EntitiesPackage from './EntitiesPackage'

export default function createEntityDbSession (seed = []) {
  let configurator = new TextureConfigurator()
  configurator.import(EntitiesPackage, { standalone: true })
  let entityDb = configurator.createDocument()
  // Seed entityDb
  seed.forEach(node => {
    entityDb.create(node)
  })
  return new DocumentSession(entityDb)
}