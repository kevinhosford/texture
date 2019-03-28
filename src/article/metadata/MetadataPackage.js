import { AnnotationCommand, getKeyForPath } from 'substance'
import {
  BasePackage, EditorBasePackage, ModelComponentPackage, FindAndReplacePackage
} from '../../kit'

import ArticleToolbarPackage from '../shared/ArticleToolbarPackage'
import PersistencePackage from '../../PersistencePackage'
import EntityLabelsPackage from '../shared/EntityLabelsPackage'
import ManuscriptContentPackage from '../shared/ManuscriptContentPackage'

import AbstractsSectionComponent from './AbstractsSectionComponent'
import AddReferenceWorkflow from '../shared/AddReferenceWorkflow'
import AddEntityCommand from '../shared/AddEntityCommand'
import ArticleInformationSectionComponent from './ArticleInformationSectionComponent'
import ArticleMetadataComponent from './ArticleMetadataComponent'
import BibliographicEntryEditor from './BibliographicEntryEditor'
import CustomAbstractComponent from './CustomAbstractComponent'
import { MoveCollectionItemCommand, RemoveCollectionItemCommand } from './CollectionCommands'
import {
  AddFigurePanelCommand, MoveFigurePanelCommand,
  ReplaceFigurePanelImageCommand, RemoveFigurePanelCommand, OpenFigurePanelImageCommand
} from '../shared/FigurePanelCommands'
import EditEntityCommand from '../shared/EditEntityCommand'
import FiguresSectionComponent from './FiguresSectionComponent'
import InsertCustomAbstractCommand from '../shared/InsertCustomAbstractCommand'
import InsertFigurePanelTool from '../shared/InsertFigurePanelTool'
import InsertFootnoteCommand from '../shared/InsertFootnoteCommand'
import OpenFigurePanelImageTool from '../shared/OpenFigurePanelImageTool'
import ReplaceFigurePanelTool from '../shared/ReplaceFigurePanelTool'
import TableFigureComponent from '../shared/TableFigureComponent'
import TranslatableEntryEditor from './TranslatableEntryEditor'
import {
  AddCustomMetadataFieldCommand, MoveCustomMetadataFieldCommand, RemoveCustomMetadataFieldCommand
} from '../shared/CustomMetadataFieldCommands'
import RemoveReferenceCommand from './RemoveReferenceCommand'
import RemoveItemCommand from '../shared/RemoveItemCommand'
import SwitchViewCommand from '../shared/SwitchViewCommand'

export default {
  name: 'ArticleMetadata',
  configure (config) {
    config.import(BasePackage)
    config.import(EditorBasePackage)
    config.import(ArticleToolbarPackage)
    config.import(PersistencePackage)
    config.import(ManuscriptContentPackage)
    config.import(ModelComponentPackage)
    config.import(EntityLabelsPackage)
    config.import(FindAndReplacePackage)

    config.addComponent('add-reference', AddReferenceWorkflow)
    config.addComponent('article-metadata', ArticleMetadataComponent)
    config.addComponent('article-information', ArticleInformationSectionComponent)
    config.addComponent('custom-abstract', CustomAbstractComponent)
    config.addComponent('bibr', BibliographicEntryEditor, true)
    config.addComponent('table-figure', TableFigureComponent, true)
    config.addComponent('subject', TranslatableEntryEditor)
    config.addComponent('keyword', TranslatableEntryEditor)
    // Note: @figures and @tables are (dynamic) collections derived from the article's content
    config.addComponent('@abstracts', AbstractsSectionComponent)
    config.addComponent('@figures', FiguresSectionComponent)

    // Commands
    config.addCommand('add-metadata-field', AddCustomMetadataFieldCommand, {
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('add-figure-panel', AddFigurePanelCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('edit-author', EditEntityCommand, {
      selectionType: 'author',
      commandGroup: 'author'
    })
    config.addCommand('edit-reference', EditEntityCommand, {
      selectionType: 'reference',
      commandGroup: 'reference'
    })
    config.addCommand('move-down-col-item', MoveCollectionItemCommand, {
      direction: 'down',
      commandGroup: 'collection'
    })
    config.addCommand('move-down-metadata-field', MoveCustomMetadataFieldCommand, {
      direction: 'down',
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('move-down-figure-panel', MoveFigurePanelCommand, {
      direction: 'down',
      commandGroup: 'figure-panel'
    })
    config.addCommand('move-up-col-item', MoveCollectionItemCommand, {
      direction: 'up',
      commandGroup: 'collection'
    })
    config.addCommand('move-up-metadata-field', MoveCustomMetadataFieldCommand, {
      direction: 'up',
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('move-up-figure-panel', MoveFigurePanelCommand, {
      direction: 'up',
      commandGroup: 'figure-panel'
    })
    config.addCommand('open-figure-panel-image', OpenFigurePanelImageCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('open-manuscript', SwitchViewCommand, {
      viewName: 'manuscript',
      commandGroup: 'switch-view'
    })
    config.addCommand('open-metadata', SwitchViewCommand, {
      viewName: 'metadata',
      commandGroup: 'switch-view'
    })
    config.addCommand('remove-col-item', RemoveCollectionItemCommand, {
      commandGroup: 'collection'
    })
    config.addCommand('remove-footnote', RemoveItemCommand, {
      nodeType: 'footnote',
      commandGroup: 'footnote'
    })
    config.addCommand('remove-metadata-field', RemoveCustomMetadataFieldCommand, {
      commandGroup: 'custom-metadata-fields'
    })
    config.addCommand('remove-figure-panel', RemoveFigurePanelCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('remove-reference', RemoveReferenceCommand, {
      commandGroup: 'reference'
    })
    config.addCommand('replace-figure-panel-image', ReplaceFigurePanelImageCommand, {
      commandGroup: 'figure-panel'
    })
    config.addCommand('toggle-bold', AnnotationCommand, {
      nodeType: 'bold',
      accelerator: 'CommandOrControl+B',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-italic', AnnotationCommand, {
      nodeType: 'italic',
      accelerator: 'CommandOrControl+I',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-monospace', AnnotationCommand, {
      nodeType: 'monospace',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-overline', AnnotationCommand, {
      nodeType: 'overline',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-small-caps', AnnotationCommand, {
      nodeType: 'small-caps',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-strike-through', AnnotationCommand, {
      nodeType: 'strike-through',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-subscript', AnnotationCommand, {
      nodeType: 'sub',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-superscript', AnnotationCommand, {
      nodeType: 'sup',
      commandGroup: 'formatting'
    })
    config.addCommand('toggle-underline', AnnotationCommand, {
      nodeType: 'underline',
      commandGroup: 'formatting'
    })

    // Tools
    config.addComponent('add-figure-panel', InsertFigurePanelTool)
    config.addComponent('open-figure-panel-image', OpenFigurePanelImageTool)
    config.addComponent('replace-figure-panel-image', ReplaceFigurePanelTool)

    // KeyboardShortcuts
    config.addKeyboardShortcut('CommandOrControl+Alt+Up', { command: 'move-up-col-item' })
    config.addKeyboardShortcut('CommandOrControl+Alt+Down', { command: 'move-down-col-item' })
    config.addKeyboardShortcut('CommandOrControl+Alt+Delete', { command: 'remove-col-item' })

    // Labels
    config.addLabel('abstracts', 'Abstracts')
    config.addLabel('article', 'Article Information')
    config.addLabel('article-information', 'Article Information')
    config.addLabel('authors', 'Authors')
    config.addLabel('figures', 'Figures')
    config.addLabel('footnotes', 'Footnotes')
    config.addLabel('groups', 'Groups')
    config.addLabel('issueTitle', 'Issue Title')
    config.addLabel('keywords', 'Keywords')
    config.addLabel('subjects', 'Subjects')
    config.addLabel('organisations', 'Affiliations')
    config.addLabel('references', 'References')
    config.addLabel('tables', 'Tables')
    config.addLabel('translations', 'Translations')
    config.addLabel('add-reference-title', 'Add Reference(s)')
    config.addLabel('add-ref-manually', 'Or create manually')
    config.addLabel('fetch-datacite', 'Fetch from DataCite')
    config.addLabel('enter-doi-placeholder', 'Enter one or more DOIs')
    config.addLabel('add-action', 'Add')
    config.addLabel('enter-url-placeholder', 'Enter url')
    config.addLabel('import-refs', 'Import')
    config.addLabel('supported-ref-formats', 'Supported formats')
    config.addLabel('original-translation', 'Original')
    config.addLabel('add-translation', 'Add Translation')
    config.addLabel('select-language', 'Select language')
    config.addLabel('add', 'Add')
    config.addLabel('edit', 'Edit')
    config.addLabel('remove', 'Remove')
    config.addLabel('workflows', 'Workflows')
    config.addLabel('select-abstract-type', 'Select abstract type')
    config.addLabel('select-license', 'Select license')
    config.addLabel('select-item', 'Choose')
    config.addLabel('move-down-figure-panel', 'Move Down Sub-Figure')
    config.addLabel('enter-custom-field-name', 'Enter name')
    config.addLabel('enter-custom-field-value', 'Enter value')
    config.addLabel('article-metadata', 'Article Metadata')
    config.addLabel('subtitle', 'Subtitle')
    config.addLabel('empty-figure-metadata', 'No fields specified')
    // Icons
    config.addIcon('move-down-figure-panel', { 'fontawesome': 'fa-caret-square-o-down' })
    config.addIcon('input-loading', { 'fontawesome': 'fa-spinner fa-spin' })
    config.addIcon('input-error', { 'fontawesome': 'fa-exclamation-circle' })

    // TODO: need to rethink this a some point
    registerCollectionCommand(config, 'author', ['metadata', 'authors'], { keyboardShortcut: 'CommandOrControl+Alt+A', nodeType: 'person' })
    registerCollectionCommand(config, 'funder', ['metadata', 'funders'], { keyboardShortcut: 'CommandOrControl+Alt+Y' })
    registerCollectionCommand(config, 'editor', ['metadata', 'editors'], { keyboardShortcut: 'CommandOrControl+Alt+E', nodeType: 'person' })
    registerCollectionCommand(config, 'footnote', ['article', 'footnotes'], { automaticOrder: true, Command: InsertFootnoteCommand })
    registerCollectionCommand(config, 'group', ['metadata', 'groups'], { keyboardShortcut: 'CommandOrControl+Alt+G' })
    registerCollectionCommand(config, 'keyword', ['metadata', 'keywords'], { keyboardShortcut: 'CommandOrControl+Alt+K' })
    registerCollectionCommand(config, 'organisation', ['metadata', 'organisations'], { keyboardShortcut: 'CommandOrControl+Alt+O' })
    registerCollectionCommand(config, 'subject', ['metadata', 'subjects'])
    registerCollectionCommand(config, 'custom-abstract', ['article', 'customAbstracts'], { Command: InsertCustomAbstractCommand })
    config.addCommand('insert-reference', AddEntityCommand, {
      workflow: 'add-reference',
      commandGroup: 'add-entity',
      type: 'bibr'
    })
  }
}

// TODO: this is like an overkill, registering one collection item command
// for every collection type
// it would be better to have just one set of commands
// which is detecting the collection automagically
// The challenge will then be how to control certain things,
// such as disabling move up/down etc.
function registerCollectionCommand (config, itemType, collectionPath, options = {}) {
  let nodeType = options.nodeType || itemType
  let xpathSelector = getKeyForPath(collectionPath)
  let Command = options.Command || AddEntityCommand
  config.addCommand(`insert-${itemType}`, Command, {
    type: nodeType,
    collection: collectionPath,
    commandGroup: 'add-entity'
  })
  if (options.keyboardShortcut) {
    config.addKeyboardShortcut(options.keyboardShortcut, { command: `add-${itemType}` })
  }
  if (!options.automaticOrder) {
    config.addCommand(`move-up-${itemType}`, MoveCollectionItemCommand, {
      direction: 'up',
      commandGroup: 'collection',
      xpathSelector
    })
    config.addIcon(`move-up-${itemType}`, { 'fontawesome': 'fa-caret-square-o-up' })
    config.addLabel(`move-up-${itemType}`, {
      en: 'Move item up'
    })
    config.addKeyboardShortcut('CommandOrControl+Alt+Up', { command: `move-up-${itemType}` })
    config.addCommand(`move-down-${itemType}`, MoveCollectionItemCommand, {
      direction: 'down',
      commandGroup: 'collection',
      xpathSelector
    })
    config.addIcon(`move-down-${itemType}`, { 'fontawesome': 'fa-caret-square-o-down' })
    config.addLabel(`move-down-${itemType}`, {
      en: 'Move item down'
    })
    config.addKeyboardShortcut('CommandOrControl+Alt+Down', { command: `move-down-${itemType}` })
    config.addCommand(`remove-${itemType}`, RemoveCollectionItemCommand, {
      commandGroup: 'collection',
      xpathSelector
    })

    config.addIcon('remove', { 'fontawesome': 'fa-trash' })
    config.addIcon('checked-item', { 'fontawesome': 'fa-check-square-o' })
    config.addIcon('unchecked-item', { 'fontawesome': 'fa-square-o' })
  }
  config.addIcon(`remove-${itemType}`, { 'fontawesome': 'fa-trash' })
  config.addLabel(`remove-${itemType}`, {
    en: 'Remove item'
  })
  config.addKeyboardShortcut('CommandOrControl+Alt+Delete', { command: `remove-${itemType}` })
}
