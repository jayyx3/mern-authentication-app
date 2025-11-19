import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Trash2, Edit2, Save, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { toast } from 'sonner'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState({ title: '', content: '' })
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState({ title: '', content: '' })

  const handleAddNote = () => {
    if (!newNote.title.trim() || !newNote.content.trim()) {
      toast.error('Please fill in both title and content')
      return
    }

    const note = {
      id: Date.now(),
      title: newNote.title,
      content: newNote.content,
      createdAt: new Date().toLocaleString()
    }

    setNotes([note, ...notes])
    setNewNote({ title: '', content: '' })
    toast.success('Note added successfully')
  }

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
    toast.success('Note deleted')
  }

  const handleEditNote = (note) => {
    setEditingId(note.id)
    setEditContent({ title: note.title, content: note.content })
  }

  const handleSaveEdit = (id) => {
    if (!editContent.title.trim() || !editContent.content.trim()) {
      toast.error('Title and content cannot be empty')
      return
    }

    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, title: editContent.title, content: editContent.content }
        : note
    ))
    setEditingId(null)
    toast.success('Note updated successfully')
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditContent({ title: '', content: '' })
  }

  return (
    <div className='min-h-screen bg-green-50'>
      <Navbar />
      <div className='max-w-6xl mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-green-600 mb-2'>My Notes</h1>
          <p className='text-gray-600'>Organize your thoughts and ideas</p>
        </div>

        {/* Add New Note */}
        <Card className='mb-8 shadow-lg'>
          <CardHeader>
            <CardTitle className='text-green-600'>Create New Note</CardTitle>
            <CardDescription>Add a new note to your collection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <Input
                placeholder='Note Title'
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                className='text-lg font-semibold'
              />
              <textarea
                placeholder='Write your note content here...'
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                className='w-full min-h-[120px] p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <Button
                onClick={handleAddNote}
                className='w-full bg-green-600 hover:bg-green-500'
              >
                <Plus className='w-4 h-4 mr-2' />
                Add Note
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notes List */}
        <div className='space-y-4'>
          {notes.length === 0 ? (
            <Card className='text-center py-12'>
              <CardContent>
                <p className='text-gray-500 text-lg'>No notes yet. Create your first note above!</p>
              </CardContent>
            </Card>
          ) : (
            notes.map((note) => (
              <Card key={note.id} className='shadow-md hover:shadow-lg transition-shadow'>
                <CardHeader>
                  {editingId === note.id ? (
                    <Input
                      value={editContent.title}
                      onChange={(e) => setEditContent({ ...editContent, title: e.target.value })}
                      className='text-xl font-semibold'
                    />
                  ) : (
                    <CardTitle className='text-green-600'>{note.title}</CardTitle>
                  )}
                  <CardDescription className='text-sm text-gray-500'>
                    {note.createdAt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {editingId === note.id ? (
                    <textarea
                      value={editContent.content}
                      onChange={(e) => setEditContent({ ...editContent, content: e.target.value })}
                      className='w-full min-h-[100px] p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500'
                    />
                  ) : (
                    <p className='text-gray-700 whitespace-pre-wrap'>{note.content}</p>
                  )}
                  <div className='flex gap-2 mt-4'>
                    {editingId === note.id ? (
                      <>
                        <Button
                          onClick={() => handleSaveEdit(note.id)}
                          size='sm'
                          className='bg-green-600 hover:bg-green-500'
                        >
                          <Save className='w-4 h-4 mr-1' />
                          Save
                        </Button>
                        <Button
                          onClick={handleCancelEdit}
                          size='sm'
                          variant='outline'
                        >
                          <X className='w-4 h-4 mr-1' />
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => handleEditNote(note)}
                          size='sm'
                          variant='outline'
                          className='text-green-600 border-green-600 hover:bg-green-50'
                        >
                          <Edit2 className='w-4 h-4 mr-1' />
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDeleteNote(note.id)}
                          size='sm'
                          variant='outline'
                          className='text-red-600 border-red-600 hover:bg-red-50'
                        >
                          <Trash2 className='w-4 h-4 mr-1' />
                          Delete
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Notes
