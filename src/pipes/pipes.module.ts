import { NgModule } from '@angular/core';
import { SearchPipe } from '../../pipes/search/search';
import { Data } from '../../providers.data';
@NgModule({
	declarations: [SearchPipe,
    SortPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe]
})
export class PipesModule {}
