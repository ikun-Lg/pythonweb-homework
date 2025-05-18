import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface MovieFilterProps {
  onFilter: (filters: {
    actors: string[];
    regions: string[];
    tags: string[];
  }) => void;
}

export function MovieFilter({ onFilter }: MovieFilterProps) {
  const [actors, setActors] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [actorInput, setActorInput] = useState('');
  const [regionInput, setRegionInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  const handleAddActor = () => {
    if (actorInput && !actors.includes(actorInput)) {
      setActors([...actors, actorInput]);
      setActorInput('');
    }
  };

  const handleAddRegion = () => {
    if (regionInput && !regions.includes(regionInput)) {
      setRegions([...regions, regionInput]);
      setRegionInput('');
    }
  };

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleRemoveActor = (actor: string) => {
    setActors(actors.filter(a => a !== actor));
  };

  const handleRemoveRegion = (region: string) => {
    setRegions(regions.filter(r => r !== region));
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleApplyFilter = () => {
    onFilter({ actors, regions, tags });
  };

  const handleReset = () => {
    setActors([]);
    setRegions([]);
    setTags([]);
    onFilter({ actors: [], regions: [], tags: [] });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">演员</h3>
        <div className="flex gap-2">
          <Input
            placeholder="输入演员名称"
            value={actorInput}
            onChange={(e) => setActorInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddActor()}
          />
          <Button onClick={handleAddActor}>添加</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {actors.map((actor) => (
            <Badge key={actor} variant="secondary">
              {actor}
              <button
                className="ml-1 hover:text-destructive"
                onClick={() => handleRemoveActor(actor)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">地区</h3>
        <div className="flex gap-2">
          <Input
            placeholder="输入地区"
            value={regionInput}
            onChange={(e) => setRegionInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddRegion()}
          />
          <Button onClick={handleAddRegion}>添加</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <Badge key={region} variant="secondary">
              {region}
              <button
                className="ml-1 hover:text-destructive"
                onClick={() => handleRemoveRegion(region)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">标签</h3>
        <div className="flex gap-2">
          <Input
            placeholder="输入标签"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
          />
          <Button onClick={handleAddTag}>添加</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
              <button
                className="ml-1 hover:text-destructive"
                onClick={() => handleRemoveTag(tag)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={handleApplyFilter}>应用筛选</Button>
        <Button variant="outline" onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
} 