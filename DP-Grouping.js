
laraImport("weaver.WeaverOptions");
laraImport("lcl.LaraCommonLanguage");
laraImport("lcl.patterns.PatternsReader");
laraImport("lcl.patterns.grouping.GroupingUtils");
laraImport("lara.Check");
laraImport("lara.Io");
laraImport("weaver.Weaver");

var _ACTUAL_OUTPUT = "";

var ObserverResults = [
	["TextAreaFigure","FigureChangeListener","Figure"],
	["StandardDrawingView","DrawingView","FigureSelectionListener"],
	["StandardDrawingView","DrawingView","Handle"],
	["ContentProducerRegistry","Storable","StorableOutput"],
	["ContentProducerRegistry","Storable","StorableInput"],
	["DrawApplet","PaletteListener","PaletteButton"],
	["DrawApplet","PaletteListener","ToolButton"],
	["TextFigure","FigureChangeListener","Figure"],
	["ClippingUpdateStrategy","Painter","DrawingView"],
	["PatternPainter","Painter","DrawingView"],
	["SimpleUpdateStrategy","Painter","DrawingView"],
	["JavaDrawViewer","DrawingEditor","StandardDrawingView"],
	["FastBufferedUpdateStrategy","Painter","DrawingView"],
	["ZoomUpdateStrategy","Painter","DrawingView"],
	["HTMLTextAreaFigure","FigureChangeListener","Figure"],
	["BufferedUpdateStrategy","Painter","DrawingView"],
	["DrawApplication","DrawingEditor","DrawingView"],
	["DrawApplication","PaletteListener","ToolButton"],
	["CommandMenu","CommandListener","Command"],
	["CTXCommandMenu","CommandListener","Command"],
	["ToolButton","ToolListener","Tool"]];

var VisitorResults = [];

var CommandResults = [
	["TextAreaFigure","TextHolder","OffsetLocator","TextTool"],
	["TextAreaFigure","TextHolder","OffsetLocator","TextHolderContentProducer"],
	["TextAreaFigure","TextHolder","OffsetLocator","TextAreaTool"],
	["MDIDesktopPane","Desktop","MDIDesktopManager","DrawApplication"]];

var BuilderResults = [
	["DrawApplet","Tool","UndoableTool","UndoableAdapter"],
	["DrawApplet","Drawing","StandardDrawing","NullHandle"],
	["DrawApplet","Drawing","StandardDrawing","FigureChangeEvent"],
	["DrawApplet","Drawing","StandardDrawing","DrawingChangeEvent"],
	["DrawApplet","Drawing","StandardDrawing","HandleEnumerator"],
	["TextTool","TextHolder","TextAreaFigure","FigureChangeEvent"],
	["TextTool","TextHolder","TextAreaFigure","HandleEnumerator"],
	["TextTool","TextHolder","TextAreaFigure","OffsetLocator"],
	["TextTool","TextHolder","TextFigure","FontSizeHandle"],
	["TextTool","TextHolder","TextFigure","NullHandle"],
	["TextTool","TextHolder","TextFigure","FigureChangeEvent"],
	["TextTool","TextHolder","TextFigure","HandleEnumerator"],
	["TextTool","TextHolder","TextFigure","OffsetLocator"],
	["StorageFormatManager","StorageFormat","StandardStorageFormat","StorableOutput"],
	["StorageFormatManager","StorageFormat","StandardStorageFormat","StorableInput"],
	["ZoomTool","Tool","UndoableTool","UndoableAdapter"],
	["CommandMenuItem","Command","UndoableCommand","UndoableAdapter"],
	["HandleTracker","Handle","UndoableHandle","UndoableAdapter"],
	["DesktopEventService","DrawingView","StandardDrawingView","ReverseFigureEnumerator"],
	["DesktopEventService","DrawingView","StandardDrawingView","DrawingViewMouseListener"],
	["DesktopEventService","DrawingView","StandardDrawingView","StandardFigureSelection"],
	["DesktopEventService","DrawingView","StandardDrawingView","SimpleUpdateStrategy"],
	["DesktopEventService","DrawingView","StandardDrawingView","DrawingViewMouseMotionListener"],
	["DesktopEventService","DrawingView","StandardDrawingView","InsertIntoDrawingVisitor"],
	["DesktopEventService","DrawingView","StandardDrawingView","ASH"],
	["DesktopEventService","DrawingView","StandardDrawingView","DrawingViewKeyListener"],
	["DesktopEventService","DrawingView","StandardDrawingView","HandleEnumerator"],
	["DesktopEventService","DrawingView","StandardDrawingView","FigureEnumerator"],
	["DesktopEventService","DrawingView","NullDrawingView","StandardFigureSelection"],
	["DesktopEventService","DrawingView","NullDrawingView","StandardDrawing"],
	["TextHolderContentProducer","TextHolder","TextAreaFigure","FigureChangeEvent"],
	["TextHolderContentProducer","TextHolder","TextAreaFigure","HandleEnumerator"],
	["TextHolderContentProducer","TextHolder","TextAreaFigure","OffsetLocator"],
	["TextHolderContentProducer","TextHolder","TextFigure","FontSizeHandle"],
	["TextHolderContentProducer","TextHolder","TextFigure","NullHandle"],
	["TextHolderContentProducer","TextHolder","TextFigure","FigureChangeEvent"],
	["TextHolderContentProducer","TextHolder","TextFigure","HandleEnumerator"],
	["TextHolderContentProducer","TextHolder","TextFigure","OffsetLocator"],
	["ConnectionTool","ConnectionFigure","LineConnection","ArrowTip"],
	["ConnectionTool","ConnectionFigure","LineConnection","ChangeConnectionStartHandle"],
	["ConnectionTool","ConnectionFigure","LineConnection","ChangeConnectionEndHandle"],
	["ConnectionTool","ConnectionFigure","LineConnection","HandleEnumerator"],
	["ConnectionTool","ConnectionFigure","LineConnection","PolyLineHandle"],
	["TextAreaTool","TextHolder","TextAreaFigure","FigureChangeEvent"],
	["TextAreaTool","TextHolder","TextAreaFigure","HandleEnumerator"],
	["TextAreaTool","TextHolder","TextAreaFigure","OffsetLocator"],
	["TextAreaTool","TextHolder","TextFigure","FontSizeHandle"],
	["TextAreaTool","TextHolder","TextFigure","NullHandle"],
	["TextAreaTool","TextHolder","TextFigure","FigureChangeEvent"],
	["TextAreaTool","TextHolder","TextFigure","HandleEnumerator"],
	["TextAreaTool","TextHolder","TextFigure","OffsetLocator"],
	["DrawingViewKeyListener","Command","UndoableCommand","UndoableAdapter"],
	["CommandButton","Command","UndoableCommand","UndoableAdapter"],
	["DrawApplication","DrawingView","StandardDrawingView","ReverseFigureEnumerator"],
	["DrawApplication","DrawingView","StandardDrawingView","DrawingViewMouseListener"],
	["DrawApplication","DrawingView","StandardDrawingView","StandardFigureSelection"],
	["DrawApplication","DrawingView","StandardDrawingView","SimpleUpdateStrategy"],
	["DrawApplication","DrawingView","StandardDrawingView","DrawingViewMouseMotionListener"],
	["DrawApplication","DrawingView","StandardDrawingView","InsertIntoDrawingVisitor"],
	["DrawApplication","DrawingView","StandardDrawingView","ASH"],
	["DrawApplication","DrawingView","StandardDrawingView","DrawingViewKeyListener"],
	["DrawApplication","DrawingView","StandardDrawingView","HandleEnumerator"],
	["DrawApplication","DrawingView","StandardDrawingView","FigureEnumerator"],
	["DrawApplication","DrawingView","NullDrawingView","StandardFigureSelection"],
	["DrawApplication","DrawingView","NullDrawingView","StandardDrawing"],
	["DrawApplication","Desktop","SplitPaneDesktop","DesktopEventService"],
	["DrawApplication","Desktop","JScrollPaneDesktop","DesktopEventService"],
	["DrawApplication","Desktop","JPanelDesktop","DesktopEventService"],
	["DrawApplication","Desktop","MDIDesktopPane","DesktopEventService"],
	["DrawApplication","Desktop","MDIDesktopPane","MDIDesktopManager"],
	["CommandCheckBoxMenuItem","Command","UndoableCommand","UndoableAdapter"],
	["Animator","Animatable","BouncingDrawing","AnimationDecorator"],
	["Animator","DrawingView","StandardDrawingView","ReverseFigureEnumerator"],
	["Animator","DrawingView","StandardDrawingView","DrawingViewMouseListener"],
	["Animator","DrawingView","StandardDrawingView","StandardFigureSelection"],
	["Animator","DrawingView","StandardDrawingView","SimpleUpdateStrategy"],
	["Animator","DrawingView","StandardDrawingView","DrawingViewMouseMotionListener"],
	["Animator","DrawingView","StandardDrawingView","InsertIntoDrawingVisitor"],
	["Animator","DrawingView","StandardDrawingView","ASH"],
	["Animator","DrawingView","StandardDrawingView","DrawingViewKeyListener"],
	["Animator","DrawingView","StandardDrawingView","HandleEnumerator"],
	["Animator","DrawingView","StandardDrawingView","FigureEnumerator"],
	["Animator","DrawingView","NullDrawingView","StandardFigureSelection"],
	["Animator","DrawingView","NullDrawingView","StandardDrawing"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","ReverseFigureEnumerator"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","DrawingViewMouseListener"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","StandardFigureSelection"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","SimpleUpdateStrategy"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","DrawingViewMouseMotionListener"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","InsertIntoDrawingVisitor"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","ASH"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","DrawingViewKeyListener"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","HandleEnumerator"],
	["MDIDesktopPane","DrawingView","StandardDrawingView","FigureEnumerator"],
	["MDIDesktopPane","DrawingView","NullDrawingView","StandardFigureSelection"],
	["MDIDesktopPane","DrawingView","NullDrawingView","StandardDrawing"],
	["ToolButton","Tool","UndoableTool","UndoableAdapter"],
	["DragNDropTool","Tool","UndoableTool","UndoableAdapter"],
	["FigureAndEnumerator","FigureEnumeration","ReverseFigureEnumerator","ReverseListEnumerator"],
	["UndoableHandle","DrawingView","StandardDrawingView","ReverseFigureEnumerator"],
	["UndoableHandle","DrawingView","StandardDrawingView","DrawingViewMouseListener"],
	["UndoableHandle","DrawingView","StandardDrawingView","StandardFigureSelection"],
	["UndoableHandle","DrawingView","StandardDrawingView","SimpleUpdateStrategy"],
	["UndoableHandle","DrawingView","StandardDrawingView","DrawingViewMouseMotionListener"],
	["UndoableHandle","DrawingView","StandardDrawingView","InsertIntoDrawingVisitor"],
	["UndoableHandle","DrawingView","StandardDrawingView","ASH"],
	["UndoableHandle","DrawingView","StandardDrawingView","DrawingViewKeyListener"],
	["UndoableHandle","DrawingView","StandardDrawingView","HandleEnumerator"],
	["UndoableHandle","DrawingView","StandardDrawingView","FigureEnumerator"],
	["UndoableHandle","DrawingView","NullDrawingView","StandardFigureSelection"],
	["UndoableHandle","DrawingView","NullDrawingView","StandardDrawing"]];

var BridgeResults = [
	["PolygonTool","AbstractTool","StandardDrawingView","DrawingView"],
	["PolygonTool","AbstractTool","DrawApplet","DrawingEditor"],
	["PolygonTool","AbstractTool","UndoRedoActivity","Undoable"],
	["PolygonTool","AbstractTool","NullDrawingView","DrawingView"],
	["PolygonTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["PolygonTool","AbstractTool","DrawApplication","DrawingEditor"],
	["PolygonTool","AbstractTool","UndoableAdapter","Undoable"],
	["RedoCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["RedoCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["RedoCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["RedoCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["RedoCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["PolygonHandle","AbstractHandle","UndoRedoActivity","Undoable"],
	["PolygonHandle","AbstractHandle","UndoableAdapter","Undoable"],
	["NullFigure","AbstractFigure","TextAreaFigure","FigureChangeListener"],
	["NullFigure","AbstractFigure","TextFigure","FigureChangeListener"],
	["NullFigure","AbstractFigure","FigureChangeAdapter","FigureChangeListener"],
	["NullFigure","AbstractFigure","HTMLTextAreaFigure","FigureChangeListener"],
	["NullFigure","AbstractFigure","FigureChangeEventMulticaster","FigureChangeListener"],
	["SelectAllCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["SelectAllCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["SelectAllCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["SelectAllCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["SelectAllCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["AlignCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["AlignCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["AlignCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["AlignCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["AlignCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["ChangeAttributeCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["ChangeAttributeCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["ChangeAttributeCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["ChangeAttributeCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["ChangeAttributeCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["ZoomTool","AbstractTool","StandardDrawingView","DrawingView"],
	["ZoomTool","AbstractTool","DrawApplet","DrawingEditor"],
	["ZoomTool","AbstractTool","UndoRedoActivity","Undoable"],
	["ZoomTool","AbstractTool","NullDrawingView","DrawingView"],
	["ZoomTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["ZoomTool","AbstractTool","DrawApplication","DrawingEditor"],
	["ZoomTool","AbstractTool","UndoableAdapter","Undoable"],
	["SelectionTool","AbstractTool","StandardDrawingView","DrawingView"],
	["SelectionTool","AbstractTool","DrawApplet","DrawingEditor"],
	["SelectionTool","AbstractTool","UndoRedoActivity","Undoable"],
	["SelectionTool","AbstractTool","NullDrawingView","DrawingView"],
	["SelectionTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["SelectionTool","AbstractTool","DrawApplication","DrawingEditor"],
	["SelectionTool","AbstractTool","UndoableAdapter","Undoable"],
	["ToggleGridCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["ToggleGridCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["ToggleGridCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["ToggleGridCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["ToggleGridCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["PolyLineFigure","AbstractFigure","TextAreaFigure","FigureChangeListener"],
	["PolyLineFigure","AbstractFigure","TextFigure","FigureChangeListener"],
	["PolyLineFigure","AbstractFigure","FigureChangeAdapter","FigureChangeListener"],
	["PolyLineFigure","AbstractFigure","HTMLTextAreaFigure","FigureChangeListener"],
	["PolyLineFigure","AbstractFigure","FigureChangeEventMulticaster","FigureChangeListener"],
	["UndoCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["UndoCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["UndoCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["UndoCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["UndoCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["CreationTool","AbstractTool","StandardDrawingView","DrawingView"],
	["CreationTool","AbstractTool","DrawApplet","DrawingEditor"],
	["CreationTool","AbstractTool","UndoRedoActivity","Undoable"],
	["CreationTool","AbstractTool","NullDrawingView","DrawingView"],
	["CreationTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["CreationTool","AbstractTool","DrawApplication","DrawingEditor"],
	["CreationTool","AbstractTool","UndoableAdapter","Undoable"],
	["RadiusHandle","AbstractHandle","UndoRedoActivity","Undoable"],
	["RadiusHandle","AbstractHandle","UndoableAdapter","Undoable"],
	["HandleTracker","AbstractTool","StandardDrawingView","DrawingView"],
	["HandleTracker","AbstractTool","DrawApplet","DrawingEditor"],
	["HandleTracker","AbstractTool","UndoRedoActivity","Undoable"],
	["HandleTracker","AbstractTool","NullDrawingView","DrawingView"],
	["HandleTracker","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["HandleTracker","AbstractTool","DrawApplication","DrawingEditor"],
	["HandleTracker","AbstractTool","UndoableAdapter","Undoable"],
	["DragTracker","AbstractTool","StandardDrawingView","DrawingView"],
	["DragTracker","AbstractTool","DrawApplet","DrawingEditor"],
	["DragTracker","AbstractTool","UndoRedoActivity","Undoable"],
	["DragTracker","AbstractTool","NullDrawingView","DrawingView"],
	["DragTracker","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["DragTracker","AbstractTool","DrawApplication","DrawingEditor"],
	["DragTracker","AbstractTool","UndoableAdapter","Undoable"],
	["NullTool","AbstractTool","StandardDrawingView","DrawingView"],
	["NullTool","AbstractTool","DrawApplet","DrawingEditor"],
	["NullTool","AbstractTool","UndoRedoActivity","Undoable"],
	["NullTool","AbstractTool","NullDrawingView","DrawingView"],
	["NullTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["NullTool","AbstractTool","DrawApplication","DrawingEditor"],
	["NullTool","AbstractTool","UndoableAdapter","Undoable"],
	["ChangeConnectionStartHandle","ChangeConnectionHandle","LineConnection","ConnectionFigure"],
	["SendToBackCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["SendToBackCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["SendToBackCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["SendToBackCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["SendToBackCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["ChangeConnectionEndHandle","ChangeConnectionHandle","LineConnection","ConnectionFigure"],
	["InsertImageCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["InsertImageCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["InsertImageCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["InsertImageCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["InsertImageCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["ConnectionTool","AbstractTool","StandardDrawingView","DrawingView"],
	["ConnectionTool","AbstractTool","DrawApplet","DrawingEditor"],
	["ConnectionTool","AbstractTool","UndoRedoActivity","Undoable"],
	["ConnectionTool","AbstractTool","NullDrawingView","DrawingView"],
	["ConnectionTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["ConnectionTool","AbstractTool","DrawApplication","DrawingEditor"],
	["ConnectionTool","AbstractTool","UndoableAdapter","Undoable"],
	["GroupCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["GroupCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["GroupCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["GroupCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["GroupCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["BringToFrontCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["BringToFrontCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["BringToFrontCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["BringToFrontCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["BringToFrontCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["SelectAreaTracker","AbstractTool","StandardDrawingView","DrawingView"],
	["SelectAreaTracker","AbstractTool","DrawApplet","DrawingEditor"],
	["SelectAreaTracker","AbstractTool","UndoRedoActivity","Undoable"],
	["SelectAreaTracker","AbstractTool","NullDrawingView","DrawingView"],
	["SelectAreaTracker","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["SelectAreaTracker","AbstractTool","DrawApplication","DrawingEditor"],
	["SelectAreaTracker","AbstractTool","UndoableAdapter","Undoable"],
	["ScribbleTool","AbstractTool","StandardDrawingView","DrawingView"],
	["ScribbleTool","AbstractTool","DrawApplet","DrawingEditor"],
	["ScribbleTool","AbstractTool","UndoRedoActivity","Undoable"],
	["ScribbleTool","AbstractTool","NullDrawingView","DrawingView"],
	["ScribbleTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["ScribbleTool","AbstractTool","DrawApplication","DrawingEditor"],
	["ScribbleTool","AbstractTool","UndoableAdapter","Undoable"],
	["TriangleRotationHandle","AbstractHandle","UndoRedoActivity","Undoable"],
	["TriangleRotationHandle","AbstractHandle","UndoableAdapter","Undoable"],
	["PolygonScaleHandle","AbstractHandle","UndoRedoActivity","Undoable"],
	["PolygonScaleHandle","AbstractHandle","UndoableAdapter","Undoable"],
	["URLTool","AbstractTool","StandardDrawingView","DrawingView"],
	["URLTool","AbstractTool","DrawApplet","DrawingEditor"],
	["URLTool","AbstractTool","UndoRedoActivity","Undoable"],
	["URLTool","AbstractTool","NullDrawingView","DrawingView"],
	["URLTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["URLTool","AbstractTool","DrawApplication","DrawingEditor"],
	["URLTool","AbstractTool","UndoableAdapter","Undoable"],
	["ElbowHandle","AbstractHandle","UndoRedoActivity","Undoable"],
	["ElbowHandle","AbstractHandle","UndoableAdapter","Undoable"],
	["ZoomCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["ZoomCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["ZoomCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["ZoomCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["ZoomCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["ToolButton","PaletteButton","DrawApplet","PaletteListener"],
	["ToolButton","PaletteButton","DrawApplication","PaletteListener"],
	["UngroupCommand","AbstractCommand","DrawApplet","DrawingEditor"],
	["UngroupCommand","AbstractCommand","UndoRedoActivity","Undoable"],
	["UngroupCommand","AbstractCommand","JavaDrawViewer","DrawingEditor"],
	["UngroupCommand","AbstractCommand","DrawApplication","DrawingEditor"],
	["UngroupCommand","AbstractCommand","UndoableAdapter","Undoable"],
	["DragNDropTool","AbstractTool","StandardDrawingView","DrawingView"],
	["DragNDropTool","AbstractTool","DrawApplet","DrawingEditor"],
	["DragNDropTool","AbstractTool","UndoRedoActivity","Undoable"],
	["DragNDropTool","AbstractTool","NullDrawingView","DrawingView"],
	["DragNDropTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["DragNDropTool","AbstractTool","DrawApplication","DrawingEditor"],
	["DragNDropTool","AbstractTool","UndoableAdapter","Undoable"],
	["FollowURLTool","AbstractTool","StandardDrawingView","DrawingView"],
	["FollowURLTool","AbstractTool","DrawApplet","DrawingEditor"],
	["FollowURLTool","AbstractTool","UndoRedoActivity","Undoable"],
	["FollowURLTool","AbstractTool","NullDrawingView","DrawingView"],
	["FollowURLTool","AbstractTool","JavaDrawViewer","DrawingEditor"],
	["FollowURLTool","AbstractTool","DrawApplication","DrawingEditor"],
	["FollowURLTool","AbstractTool","UndoableAdapter","Undoable"],
	["LocatorHandle","AbstractHandle","UndoRedoActivity","Undoable"],
	["LocatorHandle","AbstractHandle","UndoableAdapter","Undoable"]];

var AbstractFactoryResults = [
	["TextAreaFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["TextAreaFigure","TextHolder","HandleEnumerator","HandleEnumeration"],
	["TextAreaFigure","FigureChangeListener","HandleEnumerator","HandleEnumeration"],
	["StandardDrawingView","DNDInterface","ReverseFigureEnumerator","FigureEnumeration"],
	["StandardDrawingView","DNDInterface","StandardFigureSelection","FigureSelection"],
	["StandardDrawingView","DNDInterface","SimpleUpdateStrategy","Painter"],
	["StandardDrawingView","DNDInterface","HandleEnumerator","HandleEnumeration"],
	["StandardDrawingView","DNDInterface","FigureEnumerator","FigureEnumeration"],
	["StandardDrawingView","DrawingView","ReverseFigureEnumerator","FigureEnumeration"],
	["StandardDrawingView","DrawingView","StandardFigureSelection","FigureSelection"],
	["StandardDrawingView","DrawingView","SimpleUpdateStrategy","Painter"],
	["StandardDrawingView","DrawingView","HandleEnumerator","HandleEnumeration"],
	["StandardDrawingView","DrawingView","FigureEnumerator","FigureEnumeration"],
	["PolygonFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["DrawApplet","DrawingEditor","StandardDrawingView","DrawingView"],
	["DrawApplet","DrawingEditor","StandardVersionControlStrategy","VersionControlStrategy"],
	["DrawApplet","DrawingEditor","StandardDrawing","Drawing"],
	["DrawApplet","PaletteListener","StandardDrawingView","DrawingView"],
	["DrawApplet","PaletteListener","StandardVersionControlStrategy","VersionControlStrategy"],
	["DrawApplet","PaletteListener","StandardDrawing","Drawing"],
	["DrawApplet","VersionRequester","StandardDrawingView","DrawingView"],
	["DrawApplet","VersionRequester","StandardVersionControlStrategy","VersionControlStrategy"],
	["DrawApplet","VersionRequester","StandardDrawing","Drawing"],
	["NullFigure","AbstractFigure","SingleFigureEnumerator","FigureEnumeration"],
	["GraphicalCompositeFigure","Layoutable","HandleEnumerator","HandleEnumeration"],
	["GraphicalCompositeFigure","CompositeFigure","HandleEnumerator","HandleEnumeration"],
	["LineConnection","ConnectionFigure","HandleEnumerator","HandleEnumeration"],
	["SelectionTool","AbstractTool","UndoableTool","Tool"],
	["TextFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["TextFigure","TextHolder","HandleEnumerator","HandleEnumeration"],
	["TextFigure","FigureChangeListener","HandleEnumerator","HandleEnumeration"],
	["PolyLineFigure","AbstractFigure","HandleEnumerator","HandleEnumeration"],
	["StandardFigureSelection","FigureSelection","FigureEnumerator","FigureEnumeration"],
	["PertFigure","CompositeFigure","HandleEnumerator","HandleEnumeration"],
	["DeleteFromDrawingVisitor","FigureVisitor","FigureEnumerator","FigureEnumeration"],
	["ImageFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["NullDrawingView","DrawingView","StandardFigureSelection","FigureSelection"],
	["NullDrawingView","DrawingView","StandardDrawing","Drawing"],
	["InsertIntoDrawingVisitor","FigureVisitor","FigureEnumerator","FigureEnumeration"],
	["UndoableTool","ToolListener","UndoableAdapter","Undoable"],
	["UndoableTool","Tool","UndoableAdapter","Undoable"],
	["JavaDrawViewer","DrawingEditor","StandardDrawingView","DrawingView"],
	["JavaDrawViewer","DrawingEditor","StandardDrawing","Drawing"],
	["UndoableCommand","FigureSelectionListener","UndoableAdapter","Undoable"],
	["UndoableCommand","Command","UndoableAdapter","Undoable"],
	["UndoableCommand","CommandListener","UndoableAdapter","Undoable"],
	["DrawApplication","DrawingEditor","StandardDrawingView","DrawingView"],
	["DrawApplication","DrawingEditor","StandardVersionControlStrategy","VersionControlStrategy"],
	["DrawApplication","DrawingEditor","JPanelDesktop","Desktop"],
	["DrawApplication","DrawingEditor","StandardDrawing","Drawing"],
	["DrawApplication","PaletteListener","StandardDrawingView","DrawingView"],
	["DrawApplication","PaletteListener","StandardVersionControlStrategy","VersionControlStrategy"],
	["DrawApplication","PaletteListener","JPanelDesktop","Desktop"],
	["DrawApplication","PaletteListener","StandardDrawing","Drawing"],
	["DrawApplication","VersionRequester","StandardDrawingView","DrawingView"],
	["DrawApplication","VersionRequester","StandardVersionControlStrategy","VersionControlStrategy"],
	["DrawApplication","VersionRequester","JPanelDesktop","Desktop"],
	["DrawApplication","VersionRequester","StandardDrawing","Drawing"],
	["UndoableAdapter","Undoable","ReverseFigureEnumerator","FigureEnumeration"],
	["UndoableAdapter","Undoable","FigureEnumerator","FigureEnumeration"],
	["ComponentFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["EllipseFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["RoundRectangleFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["RectangleFigure","AttributeFigure","HandleEnumerator","HandleEnumeration"],
	["UndoableHandle","Handle","UndoableAdapter","Undoable"],
	["StandardDrawing","CompositeFigure","HandleEnumerator","HandleEnumeration"],
	["StandardDrawing","Drawing","HandleEnumerator","HandleEnumeration"],
	["LocatorHandle","AbstractHandle","AWTCursor","Cursor"],
	["GroupFigure","CompositeFigure","HandleEnumerator","HandleEnumeration"],
	["GroupFigure","CompositeFigure","FigureEnumerator","FigureEnumeration"]];



//aspectdef Grouping

	// Initialize test string
	_ACTUAL_OUTPUT = "";

	printify(ObserverResults,		"Observer.pattern");
	printify(VisitorResults,			"Visitor.pattern");
	printify(CommandResults,			"Command.pattern");
	printify(BuilderResults,			"Builder.pattern");
	printify(BridgeResults,			"Bridge.pattern");
	printify(AbstractFactoryResults,	"Abstract Factory.pattern");

	// Observer			21	10	9
	// Visitor			0	0	0
	// Command			4	2	2
	// Builder			111	60	37
	// Bridge				177	92	46
	// Abstract Factory		70	45	20

	// Test output
	var expectedOutputFile = Io.getPath(WeaverOptions.getData().getContextFolder() + "/expected_outputs/",
								 "grouping-" + Weaver.getName() + ".txt");
	Check.strings(_ACTUAL_OUTPUT, Io.readFile(expectedOutputFile));
	
//end

function printify(detections, patternFilename) {

	var patternsRootDir = WeaverOptions.getData().getContextFolder() + "/patterns/";
	var pattern = PatternsReader.readPattern(patternsRootDir + patternFilename);

	var result = patternFilename;
	result += " => " + detections.length;
	result += " , " + GroupingUtils.findSuperCandidates(pattern, detections).length;
	result += " , " + GroupingUtils.findHyperCandidates(pattern, GroupingUtils.findSuperCandidates(pattern, detections)).length;
	println(result);
	_ACTUAL_OUTPUT += result + "\n";

//	print(patternFilename);
//	print(" => " + detections.length); 
//	print(" , " + GroupingUtils.findSuperCandidates(pattern, detections).length); 
//	print(" , " + GroupingUtils.findHyperCandidates(pattern, GroupingUtils.findSuperCandidates(pattern, detections)).length); 
//	println();
}

