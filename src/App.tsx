import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button.js";
import { Separator } from "./components/ui/separator.js";
import { Textarea } from "./components/ui/textarea.js";
import { Label } from "./components/ui/label.js";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "./components/ui/select.js";
import { Slider } from "./components/ui/slider.js";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b-2">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2"/>
            GitHub
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
             placeholder="Inclua o prompt para a IA..."
             className="resize-none p-5 leading-relaxed"
            />
            <Textarea
             placeholder="Resultado gerado pela IA" 
             readOnly
             className="resize-none p-5 leading-relaxed"         
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label 
              htmlFor="video" 
              className="border flex rounded-md aspect-video cursor-pointer text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/10"
            >
              <FileVideo className="w-4 h-4" />
              Selecione vídeo
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only"/>

            <Separator />

            <div className="space-y-2 resize-none">
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea 
                id="transcription_prompt" 
                className="h-20 leading-relaxed" 
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>
          <Separator/>
          <form className="space-y-6">
            <div className="space-y-4">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do YouTube</SelectItem>
                  <SelectItem value="description">Descrição do Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="space-y-4 resize-none">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">Você poderá customizar essa opção em breve</span>
            </div>
            <Separator/>
            <div className="space-y-4 resize-none">
                <Label>Temperatura</Label>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                />
                <span className="block text-xs text-muted-foreground italic">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
            </div>
            <Separator/>
            <Button type="submit" className="w-full">Executar <Wand2 className="w-4 h-4 ml-2"/></Button>
          </form>

        </aside>
      </main>
    </div>
  )
}